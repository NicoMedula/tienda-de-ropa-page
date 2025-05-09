import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Carrito = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="h-full flex flex-col">
        {/* Header del Carrito */}
        <div className="p-4 border-b flex justify-between items-center bg-primary-600 text-white">
          <h2 className="text-xl font-bold">Carrito de Compras</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Lista de Productos */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Tu carrito está vacío</p>
              <Link
                to="/catalogo"
                onClick={onClose}
                className="mt-4 inline-block text-primary-600 hover:text-primary-800 transition-colors"
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">Talle: {item.size}</p>
                    <p className="text-primary-600 font-bold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity - 1)
                      }
                      className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                      className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer del Carrito */}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-gray-900">Total:</span>
            <span className="text-xl font-bold text-primary-600">${total}</span>
          </div>
          <Link
            to="/checkout"
            onClick={onClose}
            className={`block w-full text-center py-3 px-4 rounded-md font-semibold transition-colors ${
              cartItems.length > 0
                ? "bg-primary-600 text-white hover:bg-primary-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
