import { useState } from "react";
import Modal from "./Modal";

export default function EditProductModal({
  product,
  categories,
  onSave,
  onClose
}) {

  const [form, setForm] = useState(product);

  const submit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal title="Edit Product" onClose={onClose}>

      <form onSubmit={submit} className="space-y-3">

        <input
          className="border p-2 w-full"
          value={form.name}
          onChange={(e)=>
            setForm({...form,name:e.target.value})
          }
        />

        <input
          className="border p-2 w-full"
          type="number"
          value={form.price}
          onChange={(e)=>
            setForm({...form,price:e.target.value})
          }
        />

        <select
          className="border p-2 w-full"
          value={form.category}
          onChange={(e)=>
            setForm({...form,category:e.target.value})
          }
        >

          {categories.map(c=>(
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}

        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>

      </form>

    </Modal>
  );
}