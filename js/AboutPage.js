function AboutPage({ onClose }) {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <button onClick={onClose} className="text-blue-600 mb-4 inline-block hover:underline">
        ← Volver al inicio
      </button>
      <h1 className="text-3xl font-bold mb-8 text-blue-700">Sobre NutriPet</h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Visión</h2>
          <p className="text-gray-700">
            Ser la marca latinoamericana de referencia en nutrición orgánica premium para mascotas, 
            reconocida por elevar el estándar de bienestar animal y liderar prácticas sustentables.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Misión</h2>
          <p className="text-gray-700">
            Nutrir la mejor versión de cada mascota con recetas orgánicas, científicamente formuladas 
            y éticamente producidas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Valores</h2>
          <ul className="space-y-4">
            <li className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700">Autenticidad radical</h3>
              <p className="text-gray-600">Transparencia total en cada ingrediente.</p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700">Excelencia consciente</h3>
              <p className="text-gray-600">Máxima calidad con sostenibilidad.</p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700">Innovación valiente</h3>
              <p className="text-gray-600">Envases compostables y procesos circulares.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Objetivos</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Corto plazo</h3>
              <p>Aumentar reconocimiento de marca en 20%.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Mediano plazo</h3>
              <p>Expandir a 3 nuevos países.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Largo plazo</h3>
              <p>Reducir huella de carbono en 50%.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
