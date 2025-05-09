import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
          >
            Fashion Store
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Inicio
            </Link>
            <Link
              to="/catalogo"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Catálogo
            </Link>
            <Link
              to="/carrito"
              className="relative text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
