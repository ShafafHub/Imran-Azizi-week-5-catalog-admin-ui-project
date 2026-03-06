import Button from "./ui/Button";

export default function CategoryList({ categories, onDelete }) {

  if (!categories.length) {
    return <p>No categories available</p>;
  }

  return (
    <div className="mt-6 space-y-3">

      {categories.map((cat) => (

        <div
          key={cat._id}
          className="flex justify-between border p-3 rounded"
        >

          <span>{cat.name}</span>

          <Button
            variant="danger"
            onClick={() => onDelete(cat._id)}
          >
            Delete
          </Button>

        </div>

      ))}

    </div>
  );
}