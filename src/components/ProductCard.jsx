import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, price, image, category } = product;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link to={`/producto/${id}`} className="block relative overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-500 text-white">
            {category}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            <Link to={`/producto/${id}`}>{name}</Link>
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              ${price.toFixed(2)}
            </span>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => addToCart(product)}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
