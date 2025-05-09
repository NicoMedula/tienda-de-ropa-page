import { useState } from "react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/products";

const Catalogo = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [priceRange, setPriceRange] = useState(100);
  const [selectedSize, setSelectedSize] = useState("Todos");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "Todas" || product.category === selectedCategory;
    const priceMatch = product.price <= priceRange;
    const sizeMatch =
      selectedSize === "Todos" || product.size.includes(selectedSize);
    return categoryMatch && priceMatch && sizeMatch;
  });

  const sizes = ["Todos", "XS", "S", "M", "L", "XL", "28", "30", "32", "34"];

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Catálogo de Productos</h1>

        {/* Filtros */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Filtro por Categoría */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Todas">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por Precio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio Máximo: ${priceRange}
              </label>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Filtro por Talle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Talle
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-64 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <Link
                    to={`/producto/${product.id}`}
                    className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No se encontraron productos con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
