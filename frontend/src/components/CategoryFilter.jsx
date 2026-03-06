export default function CategoryFilter({ categories, setCategory }) {
  return (
    <select
      onChange={(e) => setCategory(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">All Categories</option>

      {categories.map((cat) => (
        <option key={cat._id} value={cat._id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}