import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function ProductForm({ onSubmit, categories }) {

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      return setError("Product name required");
    }

    if (!form.price || form.price <= 0) {
      return setError("Valid price required");
    }

    setError("");

    onSubmit(form);

    setForm({
      name: "",
      price: "",
      category: ""
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 border p-4 rounded-lg"
    >

      <h2 className="font-semibold">
        Add Product
      </h2>

      {error && (
        <p className="text-red-500">
          {error}
        </p>
      )}

      <Input
        placeholder="Product name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <Input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
      />

      <select
        className="border p-2 rounded w-full"
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      >
        <option>Select category</option>

        {categories.map((c) => (
          <option key={c._id} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>

      <Button type="submit">
        Add Product
      </Button>

    </form>
  );
}