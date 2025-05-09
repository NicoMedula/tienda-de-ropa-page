import { Link } from "react-router-dom";
import { products } from "../data/products";

const Home = () => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="pt-16">
      {/* Banner Principal */}
      <section className="relative h-[500px] bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Moda Contemporánea
            </h1>
            <p className="text-xl mb-8">
              Descubre las últimas tendencias en moda y estilo
            </p>
            <Link
              to="/catalogo"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para renovar tu guardarropa?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Descubre nuestra colección completa de prendas y accesorios
          </p>
          <Link
            to="/catalogo"
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Explorar Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
