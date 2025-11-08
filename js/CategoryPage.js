function CategoryPage() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Obtener categoría desde la URL
  const getCategoryFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("cat") || "Todos";
  };

  const category = getCategoryFromUrl();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("js/data/data.json");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error al cargar productos:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filtered = category === "Todos"
    ? products
    : products.filter((p) => p.category === category);

  return (
    <main className="container mx-auto px-4 py-8 flex-grow">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">{category}</h1>

      {loading ? (
        <p className="text-center text-gray-500">Cargando productos...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500">No hay productos en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={() => {}}
              onAddToCart={() => {}}
              isFavorite={false}
            />
          ))}
        </div>
      )}
    </main>
  );
}
