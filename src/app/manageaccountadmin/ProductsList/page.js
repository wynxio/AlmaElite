"use client";

import { useEffect, useState } from "react";
import { Button, Table, Modal, Spinner } from "react-bootstrap";
import { AdminLayout } from "@/app/components/AdminLayout";
import { toast } from "react-toastify";
import ManageProduct from "@/app/components/ManageProduct";

export default function ProductsListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/products?page=1&limit=50`);
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error("Failed to fetch products");
      }
    } catch (err) {
      console.error("Fetch products error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("Product deleted");
        fetchProducts();
      } else {
        toast.error(data.error || "Failed to delete product");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Open Add/Edit modal
  const handleOpenModal = (product = null) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <AdminLayout>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Manage Products</h3>
          <Button onClick={() => handleOpenModal()} variant="primary">
            Add Product
          </Button>
        </div>

        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Colors</th>
                <th>Sizes</th>
                <th>Payment Mode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.title}</td>
                    <td>{product.subtitle}</td>
                    <td>{product.variations?.map((v) => v.color).join(", ")}</td>
                    <td>
                      {[
                        ...new Set(
                          product.variations?.flatMap((v) =>
                            v.sizes?.map((s) => s.size)
                          )
                        ),
                      ].join(", ")}
                    </td>
                    <td>{product.paymentMode}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleOpenModal(product)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}

        {/* Modal for Add/Edit */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedProduct ? "Edit Product" : "Add Product"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ManageProduct
              product={selectedProduct}
              onSuccess={() => {
                setShowModal(false);
                fetchProducts();
              }}
            />
          </Modal.Body>
        </Modal>
      </div>
    </AdminLayout>
  );
}
