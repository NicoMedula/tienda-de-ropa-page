import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, price, image, category } = product;

  return (
    <div className="card group">
      <Link to={`/producto/${id}`} className="block relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
      </Link>

      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {category}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            <Link to={`/producto/${id}`}>{name}</Link>
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
            ${price.toFixed(2)}
          </span>
          <Button
            variant="primary"
            size="sm"
            onClick={() => addToCart(product)}
            className="ml-2"
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
