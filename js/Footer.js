function Footer({ onShowAbout }) {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <a href="contacto.html" className="hover:underline">Contáctanos</a>
            </h3>
            <p className="mb-2">info@nutripet.com</p>
            <p>+51 936 315 396</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              <a href="ubicacion.html" className="hover:underline">Ubícanos</a>
            </h3>
            <p>Caminos del Inca</p>
            <p>Santiago de Surco, Lima</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              <button onClick={onShowAbout} className="hover:underline text-left">
                Sobre nosotros
              </button>
            </h3>
            <p>Promoviendo alimentación saludable para tu mascota desde 2025</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} NutriPet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
