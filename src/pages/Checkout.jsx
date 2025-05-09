import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el pago
    alert("¡Gracias por tu compra!");
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
          <button
            onClick={() => navigate("/catalogo")}
            className="text-primary-600 hover:text-primary-800 transition-colors"
          >
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center">Finalizar Compra</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulario */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dirección de envío
              </label>
              <textarea
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-primary-700 transition-colors"
            >
              Confirmar Compra (${total})
            </button>
          </form>
        </div>

        {/* Resumen del pedido */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Resumen del Pedido</h3>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-center space-x-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    Talle: {item.size} | Cantidad: {item.quantity}
                  </p>
                  <p className="text-primary-600 font-bold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary-600">${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
