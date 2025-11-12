import { withCorsHeaders } from "@/app/lib/cors";
import connectToDatabase from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

// 🟢 GET all products with pagination and filtering
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const filteredKeyword = searchParams.get("filteredkeyword") || "";

    const db = await connectToDatabase();
    const productCollection = db.collection(process.env.NEXT_PUBLIC_TABLE_PRODUCTS);

    // Build query
    const query = {};
    if (filteredKeyword) {
      query.$or = [
        { title: { $regex: filteredKeyword, $options: "i" } },
        { subtitle: { $regex: filteredKeyword, $options: "i" } },
        { description: { $regex: filteredKeyword, $options: "i" } },
        { features: { $elemMatch: { $regex: filteredKeyword, $options: "i" } } },
      ];
    }

    const total = await productCollection.countDocuments(query);
    const products = await productCollection
      .find(query)
      .sort({ createdTime: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return withCorsHeaders(
      new Response(
        JSON.stringify({
          success: true,
          products,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
          },
        }),
        { status: 200 }
      )
    );
  } catch (err) {
    console.error("GET /api/products error:", err);
    return withCorsHeaders(
      new Response(
        JSON.stringify({ success: false, error: "Failed to fetch products" }),
        { status: 500 }
      )
    );
  }
}

export async function POST(req) {
  try {
    const db = await connectToDatabase();
    const productCollection = db.collection(process.env.NEXT_PUBLIC_TABLE_PRODUCTS);

    // Convert to IST (Asia/Kolkata)
    const createdTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    const {
      title,
      subtitle,
      actualcost,
      discountedcost,
      description,
      features,
      extras,
      basePrice,
      variations,
      paymentModes
    } = await req.json();

    // Validation
    if (!title || !description) {
      return withCorsHeaders(
        new Response(
          JSON.stringify({ success: false, error: "Title and description are required" }),
          { status: 400 }
        )
      );
    }

    // ✅ Basic structure validation
    const formattedVariations = Array.isArray(variations)
      ? variations.map(v => ({
          colorName: v.colorName || "",
          colorCode: v.colorCode || "",
          primaryImage: v.primaryImage || null, // { name, type, data }
          images: Array.isArray(v.images) ? v.images : [],
          sizes: Array.isArray(v.sizes) ? v.sizes : []
        }))
      : [];

    const result = await productCollection.insertOne({
      title,
      subtitle,
      actualcost,
      discountedcost,
      description,
      features: Array.isArray(features) ? features : [],
      extras: Array.isArray(extras) ? extras : [],
      basePrice: basePrice || 0,
      variations: formattedVariations,
      paymentModes: paymentModes || { cod: true, online: true },
      createdTime
    });

    return withCorsHeaders(
      new Response(
        JSON.stringify({
          success: true,
          message: "Product created successfully",
          insertedId: result.insertedId
        }),
        { status: 201 }
      )
    );
  } catch (err) {
    console.error("POST /api/products error:", err);
    return withCorsHeaders(
      new Response(
        JSON.stringify({ success: false, error: "Failed to create product" }),
        { status: 500 }
      )
    );
  }
}

export async function PUT(req) {
  try {
    const {
      id,
      title,
      subtitle,
      actualcost,
      discountedcost,
      description,
      features,
      extras,
      basePrice,
      variations,
      paymentModes
    } = await req.json();

    if (!id) {
      return withCorsHeaders(
        new Response(
          JSON.stringify({ success: false, error: "Product ID is required" }),
          { status: 400 }
        )
      );
    }

    const db = await connectToDatabase();
    const productCollection = db.collection(process.env.NEXT_PUBLIC_TABLE_PRODUCTS);

    // Validate and format variations to ensure structure consistency
    const formattedVariations = Array.isArray(variations)
      ? variations.map(v => ({
          colorName: v.colorName || "",
          colorCode: v.colorCode || "",
          primaryImage: v.primaryImage || null, // { name, type, data }
          images: Array.isArray(v.images) ? v.images : [],
          sizes: Array.isArray(v.sizes) ? v.sizes : []
        }))
      : [];

    const updatedProduct = {
      title,
      subtitle,
      actualcost,
      discountedcost,
      description,
      features: Array.isArray(features) ? features : [],
      extras: Array.isArray(extras) ? extras : [],
      basePrice: basePrice || 0,
      variations: formattedVariations,
      paymentModes: paymentModes || { cod: true, online: true }
    };

    const result = await productCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedProduct }
    );

    if (result.matchedCount === 0) {
      return withCorsHeaders(
        new Response(
          JSON.stringify({ success: false, error: "Product not found" }),
          { status: 404 }
        )
      );
    }

    return withCorsHeaders(
      new Response(
        JSON.stringify({ success: true, message: "Product updated successfully" }),
        { status: 200 }
      )
    );
  } catch (err) {
    console.error("PUT /api/products error:", err);
    return withCorsHeaders(
      new Response(
        JSON.stringify({ success: false, error: "Failed to update product" }),
        { status: 500 }
      )
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return withCorsHeaders(
        new Response(
          JSON.stringify({ success: false, error: "Missing product ID" }),
          { status: 400 }
        )
      );
    }

    const db = await connectToDatabase();
    const productCollection = db.collection(process.env.NEXT_PUBLIC_TABLE_PRODUCTS);

    const result = await productCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return withCorsHeaders(
        new Response(
          JSON.stringify({ success: false, error: "Product not found" }),
          { status: 404 }
        )
      );
    }

    return withCorsHeaders(
      new Response(
        JSON.stringify({ success: true, message: "Product deleted successfully" }),
        { status: 200 }
      )
    );
  } catch (err) {
    console.error("DELETE /api/products error:", err);
    return withCorsHeaders(
      new Response(
        JSON.stringify({ success: false, error: "Failed to delete product" }),
        { status: 500 }
      )
    );
  }
}
