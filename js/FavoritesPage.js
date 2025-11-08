function FavoritesPage({ products, favorites }) {
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tus Favoritos</h1>
      {favoriteProducts.length === 0 ? (
        <p className="text-center text-gray-500 py-12">
          Aún no tienes productos favoritos
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} isFavorite={true} />
          ))}
        </div>
      )}
    </main>
  );
}
