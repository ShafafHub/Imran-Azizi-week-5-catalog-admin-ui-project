import { useEffect, useState } from "react";
import api from "../services/api";
import CategoryList from "../components/CategoryList";
import CategoryForm from "../components/CategoryForm";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await api.get("/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const addCategory = async (category) => {
    await api.post("/categories", category);
    fetchCategories();
  };

  const deleteCategory = async (id) => {
    await api.delete(`/categories/${id}`);
    fetchCategories();
  };

  return (
    <DashboardLayout>
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {/* Create Category */}
      <CategoryForm onSubmit={addCategory} />

      {/* List Categories */}
      <CategoryList categories={categories} onDelete={deleteCategory} />
    </div>
    </DashboardLayout>
  );
}
