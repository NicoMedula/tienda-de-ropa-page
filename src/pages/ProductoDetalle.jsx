import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductoDetalle = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
          <Link
            to="/catalogo"
            className="text-primary-600 hover:text-primary-800 transition-colors"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imágenes */}
          <div className="bg-white rounded-lg shadow-md p-4 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="h-96 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {/* Aquí podrías agregar más imágenes del producto */}
              <div className="h-20 bg-gray-200 rounded overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Información del Producto */}
          <div className="bg-white rounded-lg shadow-md p-6 animate-slide-in">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-primary-600 mb-6">
              ${product.price}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Selector de Talle */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seleccionar Talle
              </label>
              <div className="flex flex-wrap gap-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-primary-600 text-white border-primary-600"
                        : "border-gray-300 hover:border-primary-600 hover:text-primary-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Botón de Agregar al Carrito */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 px-4 rounded-md font-semibold transition-all duration-200 ${
                selectedSize
                  ? "bg-primary-600 text-white hover:bg-primary-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!selectedSize}
            >
              Agregar al Carrito
            </button>

            {/* Notificación */}
            {showNotification && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md animate-fade-in">
                ¡Producto agregado al carrito!
              </div>
            )}

            {/* Información Adicional */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Información del Producto
              </h2>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium text-gray-900">Categoría:</span>{" "}
                  {product.category}
                </p>
                <p>
                  <span className="font-medium text-gray-900">
                    Talles disponibles:
                  </span>{" "}
                  {product.size.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
