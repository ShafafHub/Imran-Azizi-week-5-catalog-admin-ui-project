import { Link } from "react-router-dom";

export default function Sidebar() {

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">

      <h2 className="text-xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="space-y-4">

        <Link
          to="/"
          className="block hover:bg-gray-800 p-2 rounded"
        >
          Products
        </Link>

        <Link
          to="/categories"
          className="block hover:bg-gray-800 p-2 rounded"
        >
          Categories
        </Link>

      </nav>

    </div>
  );
}