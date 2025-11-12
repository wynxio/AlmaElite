"use client";

import { useEffect, useState } from "react";
import { Button, Form, Row, Col, Table } from "react-bootstrap";
import { toast } from "react-toastify";

export default function ManageProduct({ product, onSuccess }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [actualcost, setActualCost] = useState("");
  const [discountedcost, setDiscountedCost] = useState("");

  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState([]);
  const [extras, setExtras] = useState(""); // textarea string, converted to array on save
  const [paymentMode, setPaymentMode] = useState("both");
  const [variations, setVariations] = useState([]);
  const [saving, setSaving] = useState(false);

  // Load product data for edit mode
  useEffect(() => {
    if (product) {
      setTitle(product.title || "");
      setSubtitle(product.subtitle || "");
      setActualCost(product.actualcost || "");
      setDiscountedCost(product.discountedcost || "");
      setDescription(product.description || "");
      setFeatures(product.features || []);
      setExtras((product.extras || []).join("\n"));
      setPaymentMode(product.paymentMode || "both");
      setVariations(
        (product.variations || []).map((v) => ({
          colorName: v.colorName || "",
          colorCode: v.colorCode || "",
          primaryImage: v.primaryImage || null,
          images: v.images || [],
          sizes: (v.sizes || []).map((s) => ({
            size: s.size || "",
            quantity: s.quantity || 0,
          })),
        }))
      );
    }
  }, [product]);

  // Add/remove features
  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = (i) =>
    setFeatures(features.filter((_, idx) => idx !== i));
  const handleFeatureChange = (i, val) => {
    const updated = [...features];
    updated[i] = val;
    setFeatures(updated);
  };

  // Add/remove color variation
  const addVariation = () =>
    setVariations([
      ...variations,
      {
        colorName: "",
        colorCode: "",
        primaryImage: null,
        images: [],
        sizes: [],
      },
    ]);
  const removeVariation = (vIndex) =>
    setVariations(variations.filter((_, idx) => idx !== vIndex));

  // Add size to variation
  const addSize = (vIndex) => {
    const updated = [...variations];
    updated[vIndex].sizes.push({ size: "", quantity: 0 });
    setVariations(updated);
  };

  // Handle image upload
  const handleImageUpload = (file, vIndex, isPrimary = false) => {
    const reader = new FileReader();
    reader.onload = () => {
      const updated = [...variations];
      if (isPrimary) updated[vIndex].primaryImage = reader.result;
      else updated[vIndex].images.push(reader.result);
      setVariations(updated);
    };
    reader.readAsDataURL(file);
  };

  // Remove image
  const removeImage = (vIndex, imgIndex, isPrimary = false) => {
    const updated = [...variations];
    if (isPrimary) updated[vIndex].primaryImage = null;
    else updated[vIndex].images.splice(imgIndex, 1);
    setVariations(updated);
  };

  // Save product
  const handleSave = async () => {
    if (!title.trim()) return toast.error("Title is required");

    const payload = {
      title,
      subtitle,
      actualcost,
      discountedcost,
      description,
      features,
      //extras: extras.split("\n").filter(Boolean),
      extras: extras.split("\n").filter(Boolean),
      variations,
      paymentMode,
    };

    try {
      setSaving(true);
      const method = product ? "PUT" : "POST";
      const res = await fetch("/api/products", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          product ? { ...payload, id: product._id } : payload
        ),
      });

      const data = await res.json();
      if (data.success || data.message?.includes("successfully")) {
        toast.success(
          `Product ${product ? "updated" : "created"} successfully`
        );
        onSuccess?.();
      } else {
        toast.error(data.error || "Failed to save product");
      }
    } catch (err) {
      console.error("Save error:", err);
      toast.error("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <Form>
        {/* Title & Subtitle */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Old Price</Form.Label>
              <Form.Control
                value={actualcost}
                onChange={(e) => setActualCost(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>New Price</Form.Label>
              <Form.Control
                value={discountedcost}
                onChange={(e) => setDiscountedCost(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <del>
                      <h4 style={{ color: "black" }}>{actualcost}</h4>
                    </del>
                  </td>
                  <td>
                    <h4 style={{ color: "green" }}>{discountedcost}</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        {/* Features */}
        <div className="mb-3">
          <Form.Label>Features</Form.Label>
          {features.map((f, i) => (
            <div key={i} className="d-flex mb-2">
              <Form.Control
                value={f}
                onChange={(e) => handleFeatureChange(i, e.target.value)}
                placeholder="Feature point"
              />
              <Button
                variant="danger"
                size="sm"
                className="ms-2"
                onClick={() => removeFeature(i)}
              >
                X
              </Button>
            </div>
          ))}
          <Button size="sm" variant="secondary" onClick={addFeature}>
            + Add Feature
          </Button>
        </div>

        {/* Extras */}
        <Form.Group className="mb-3">
          <Form.Label>Extras</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={extras}
            onChange={(e) => setExtras(e.target.value)}
          />
        </Form.Group>

        {/* Payment Mode */}
        <Form.Group className="mb-3">
          <Form.Label>Payment Mode</Form.Label>
          <Form.Select
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option value="cod">COD</option>
            <option value="online">Pay Online</option>
            <option value="both">Both</option>
          </Form.Select>
        </Form.Group>

        {/* Variations */}
        <h5 className="mt-4">Color Variations</h5>
        {variations.map((v, vIndex) => (
          <div key={vIndex} className="border rounded p-3 mb-3">
            <Row className="mb-2">
              <Col md={5}>
                <Form.Label>Color Name</Form.Label>
                <Form.Control
                  value={v.colorName || ""}
                  onChange={(e) => {
                    const updated = [...variations];
                    updated[vIndex].colorName = e.target.value;
                    setVariations(updated);
                  }}
                />
              </Col>
              <Col md={5}>
                <Form.Label>Color Code</Form.Label>
                <Form.Control
                  type="color"
                  value={v.colorCode || "#000000"}
                  onChange={(e) => {
                    const updated = [...variations];
                    updated[vIndex].colorCode = e.target.value;
                    setVariations(updated);
                  }}
                />
              </Col>
              <Col md={2} className="d-flex align-items-end">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeVariation(vIndex)}
                >
                  Remove
                </Button>
              </Col>
            </Row>

            {/* Primary Image */}
            <div className="mb-2">
              <Form.Label>Primary Image</Form.Label>
              {v.primaryImage ? (
                <div className="d-flex align-items-center">
                  <img
                    src={v.primaryImage}
                    alt="primary"
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />
                  <Button
                    size="sm"
                    variant="danger"
                    className="ms-2"
                    onClick={() => removeImage(vIndex, null, true)}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageUpload(e.target.files[0], vIndex, true)
                  }
                />
              )}
            </div>

            {/* Additional Images */}
            <div className="mb-2">
              <Form.Label>Additional Images</Form.Label>
              <div className="d-flex flex-wrap gap-2">
                {v.images.map((img, imgIndex) => (
                  <div key={imgIndex} style={{ position: "relative" }}>
                    <img
                      src={img}
                      alt="variation"
                      style={{
                        width: 70,
                        height: 70,
                        objectFit: "cover",
                        borderRadius: 4,
                      }}
                    />
                    <Button
                      size="sm"
                      variant="danger"
                      style={{ position: "absolute", top: 0, right: 0 }}
                      onClick={() => removeImage(vIndex, imgIndex)}
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>
              <Form.Control
                type="file"
                accept="image/*"
                multiple
                onChange={(e) =>
                  Array.from(e.target.files).forEach((file) =>
                    handleImageUpload(file, vIndex, false)
                  )
                }
              />
            </div>

            {/* Sizes */}
            <h6 className="mt-3">Sizes & Quantities</h6>
            <Table bordered size="sm">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {v.sizes.map((s, sIndex) => (
                  <tr key={sIndex}>
                    <td>
                      <Form.Control
                        value={s.size}
                        onChange={(e) => {
                          const updated = [...variations];
                          updated[vIndex].sizes[sIndex].size = e.target.value;
                          setVariations(updated);
                        }}
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        value={s.quantity}
                        onChange={(e) => {
                          const updated = [...variations];
                          updated[vIndex].sizes[sIndex].quantity = Number(
                            e.target.value
                          );
                          setVariations(updated);
                        }}
                      />
                    </td>
                    <td>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          const updated = [...variations];
                          updated[vIndex].sizes.splice(sIndex, 1);
                          setVariations(updated);
                        }}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => addSize(vIndex)}
            >
              + Add Size
            </Button>
          </div>
        ))}

        <Button size="sm" variant="secondary" onClick={addVariation}>
          + Add Color Variation
        </Button>

        {/* Save Button */}
        <div className="text-end mt-4">
          <Button onClick={handleSave} disabled={saving}>
            {saving
              ? "Saving..."
              : product
              ? "Update Product"
              : "Create Product"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
