import { useState } from "react";
import Modal from "./Modal";

export default function EditCategoryModal({
  category,
  onSave,
  onClose
}) {

  const [name,setName]=useState(category.name)

  const submit=(e)=>{
    e.preventDefault()
    onSave({ ...category, name })
  }

  return (

    <Modal title="Edit Category" onClose={onClose}>

      <form onSubmit={submit} className="space-y-3">

        <input
          className="border p-2 w-full"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>

      </form>

    </Modal>

  )
}