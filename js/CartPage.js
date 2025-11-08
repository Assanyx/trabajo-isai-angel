function CartPage({ cart, onClose, onRemoveItem }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Tu Carrito</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* lsta de productos */}
        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <span>{item.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold">S/ {item.price.toFixed(2)}</span>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total y acciones */}
        <div className="border-t pt-4">
          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total:</span>
            <span>S/ {total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  );
}
