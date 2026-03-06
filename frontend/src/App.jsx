import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<ProductsPage />} />

        <Route path="/categories" element={<CategoriesPage />} />

      </Routes>

    </BrowserRouter>

  );
}