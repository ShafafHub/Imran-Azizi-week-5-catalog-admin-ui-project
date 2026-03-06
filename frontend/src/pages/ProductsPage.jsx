import { useEffect, useState } from "react";
import api from "../services/api";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

import DashboardLayout from "../components/layout/DashboardLayout";
import EditProductModal from "../components/modals/EditProductModal";
import ConfirmModal from "../components/modals/ConfirmModal";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await api.get("/products", {
      params: { search, category },
    });

    setProducts(res.data);
  };

  const fetchCategories = async () => {
    const res = await api.get("/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const addProduct = async (product) => {
    await api.post("/products", product);
    fetchProducts();
  };

  const updateProduct = async (product) => {
    await api.put(`/products/${product._id}`, product);
    setEditProduct(null);
    fetchProducts();
  };

  const removeProduct = async () => {
    await api.delete(`/products/${deleteProduct._id}`);
    setDeleteProduct(null);
    fetchProducts();
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Product Admin</h1>

        <div className="grid md:grid-cols-2 gap-4">
          <SearchBar search={search} setSearch={setSearch} />

          <CategoryFilter categories={categories} setCategory={setCategory} />
        </div>

        <div className="mt-6">
          <ProductForm onSubmit={addProduct} categories={categories} />
        </div>

        <ProductList
          products={products}
          onEdit={setEditProduct}
          onDelete={setDeleteProduct}
        />
      </div>

      {/* EDIT PRODUCT MODAL */}

      {editProduct && (
        <EditProductModal
          product={editProduct}
          categories={categories}
          onSave={updateProduct}
          onClose={() => setEditProduct(null)}
        />
      )}

      {/* DELETE CONFIRM MODAL */}

      {deleteProduct && (
        <ConfirmModal
          message={`Delete "${deleteProduct.name}" product?`}
          onConfirm={removeProduct}
          onClose={() => setDeleteProduct(null)}
        />
      )}
    </DashboardLayout>
  );
}
