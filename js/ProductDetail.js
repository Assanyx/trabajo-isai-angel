function ProductDetail({ product }) {
  if (!product)
    return (
      <div className="container mx-auto px-4 py-8">Producto no encontrado</div>
    );

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <a href="/" className="text-blue-600 mb-4 inline-block">
        ← Volver al inicio
      </a>

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow p-6">
        <div className="relative pt-[75%] bg-gray-100 rounded overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-contain p-4"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-blue-600 text-2xl my-4">
            S/ {product.price.toFixed(2)}
          </p>

          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={() => alert(`Añadido al carrito: ${product.name}`)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </main>
  );
}

