import Button from "./ui/Button";

export default function ProductList({ products, onEdit, onDelete }) {

  if (!products.length) {
    return (
      <p className="text-gray-500 mt-6">
        No products available
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">

      {products.map((product) => (

        <div
          key={product._id}
          className="border rounded-lg p-4 shadow-sm bg-white"
        >

          <h3 className="font-bold text-lg">
            {product.name}
          </h3>

          <p className="text-gray-500">
            ${product.price}
          </p>

          <p className="text-sm text-gray-400">
            {product.category?.name || "No category"}
          </p>

          <div className="flex gap-2 mt-4">

            <Button
              variant="secondary"
              onClick={() => onEdit(product)}
            >
              Edit
            </Button>

            <Button
              variant="danger"
              onClick={() => onDelete(product)}
            >
              Delete
            </Button>

          </div>

        </div>

      ))}

    </div>
  );
}