import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-400 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Fashion Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-400/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Descubre tu Estilo
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            Encuentra las últimas tendencias en moda y accesorios. Colecciones
            exclusivas para cada ocasión.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/catalogo"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              Ver Catálogo
            </Link>
            <Link
              to="/catalogo?categoria=ofertas"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-300"
            >
              Ofertas Especiales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
