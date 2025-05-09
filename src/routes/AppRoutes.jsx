import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import ProductoDetalle from "../pages/ProductoDetalle";
import Contacto from "../pages/Contacto";
import Checkout from "../pages/Checkout";

const AppRoutes = () => {
  return (
    <main className="pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </main>
  );
};

export default AppRoutes;
