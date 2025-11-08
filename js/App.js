function App() {
  const [products, setProducts] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cart, setCart] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);
  const [showFavorites, setShowFavorites] = React.useState(false);
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("js/data/data.json");
        if (!response.ok) throw new Error("Error al cargar productos");
        const data = await response.json();
        setProducts(data);

        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setCart(savedCart);
        setFavorites(savedFavorites);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Error cargando los productos");
        setProducts([
          {
            id: 1,
            name: "Galletas de quinoa sin azúcar",
            price: 5.5,
            description: "Deliciosas galletas saludables",
            image: "https://via.placeholder.com/300",
            category: "Bocaditos",
          },
          {
            id: 2,
            name: "Mermelada natural",
            price: 8.0,
            description: "100% fruta, sin conservantes",
            image: "https://via.placeholder.com/300",
            category: "Croquetas",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [cart, favorites]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <i className="fas fa-spinner fa-spin text-4xl text-blue-600 mb-4"></i>
            <p>Cargando productos...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center text-red-500 p-4">
            <i className="fas fa-exclamation-triangle text-4xl mb-4"></i>
            <p className="text-xl font-bold">{error}</p>
            <p>Mostrando datos de prueba</p>
          </div>
        </div>
      );
    }

    if (showAbout) {
      return <AboutPage onClose={() => setShowAbout(false)} />;
    }

    if (showCart) {
      return (
        <CartPage
          cart={cart}
          onClose={() => setShowCart(false)}
          onRemoveItem={removeFromCart}
        />
      );
    }

    if (showFavorites) {
      return <FavoritesPage products={products} favorites={favorites} />;
    }

    return (
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-700">
          Productos Destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((p) =>
              p.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleFavorite={toggleFavorite}
                onAddToCart={addToCart}
                isFavorite={favorites.includes(product.id)}
              />
            ))}
        </div>
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        isAuthenticated={isAuthenticated}
        onLoginClick={() => setShowAuthModal(true)}
        favoritesCount={favorites.length}
        cartCount={cart.length}
        onShowCart={() => setShowCart(true)}
        onShowFavorites={() => setShowFavorites(true)}
      />

      {renderContent()}

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}

      <Footer onShowAbout={() => setShowAbout(true)} />
    </div>
  );
}
