import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import ProductoDetalle from "./pages/ProductoDetalle";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <Router>
      <NotificationProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/producto/:id" element={<ProductoDetalle />} />
                <Route path="/carrito" element={<Checkout />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </NotificationProvider>
    </Router>
  );
}

export default App;
