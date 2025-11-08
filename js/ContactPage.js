function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contáctanos</h1>

      <form className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nombre y Apellido</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Ej: Juan Pérez"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Correo electrónico</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Mensaje</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg h-32"
            placeholder="Escribe tu consulta aquí..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </main>
  );
}
