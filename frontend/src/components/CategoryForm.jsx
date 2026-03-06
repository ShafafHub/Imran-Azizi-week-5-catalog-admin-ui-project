import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function CategoryForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Category name is required");
      return;
    }

    setError("");

    onSubmit({ name });

    setName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-lg p-4 mb-6 space-y-3"
    >
      <h2 className="font-semibold text-lg">
        Add Category
      </h2>

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      <Input
        placeholder="Category name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button type="submit">
        Add Category
      </Button>
    </form>
  );
}