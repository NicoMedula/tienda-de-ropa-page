const Contacto = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Contacto</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información de Contacto */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Información de Contacto
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Dirección</h3>
                <p className="text-gray-600">
                  Av. Corrientes 1234, Buenos Aires, Argentina
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Teléfono</h3>
                <p className="text-gray-600">+54 11 1234-5678</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">info@fashionstore.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Horarios de Atención
                </h3>
                <p className="text-gray-600">
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="asunto"
                  className="block text-sm font-medium text-gray-700"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Ubicación</h2>
          <div className="h-96 bg-gray-200 rounded-lg">
            {/* Aquí podrías integrar un mapa de Google Maps o similar */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Mapa de ubicación
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
