function UbicacionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ubícanos</h1>

      <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
        <div className="h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.719994364547!2d-76.98504712579188!3d-12.131300843478746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b80ab54a1fd3%3A0xb6dad664e321bacc!2sAv.%20Caminos%20del%20Inca%2C%20Santiago%20de%20Surco!5e0!3m2!1ses!2spe!4v1751765211781!5m2!1ses!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación EcoVida"
          ></iframe>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">
            <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
            Caminos del Inca, Santiago de Surco
          </p>
          <p className="text-gray-600 mt-2">.</p>
        </div>
      </div>
    </main>
  );
}
