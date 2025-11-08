function ProductCard({ product, onToggleFavorite, onAddToCart, isFavorite }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Imagen del producto */}
      <div className="relative pt-[75%] bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x225?text=Imagen+no+disponible";
          }}
        />

        {/* Botón Favorito */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"
          } bg-white bg-opacity-80`}
        >
          <i className={`fas fa-heart ${isFavorite ? "fill-current" : ""}`}></i>
        </button>
      </div>

      {/* Detalles del producto */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>

        <div className="mt-auto">
          <p className="text-blue-600 font-bold">
            S/ {product.price.toFixed(2)}
          </p>

          <div className="flex justify-between items-center mt-3">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {product.category}
            </span>

            {/* Botón Añadir al carrito */}
            <button
              onClick={() => onAddToCart(product)}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
            >
              <i className="fas fa-cart-plus mr-1"></i> Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
