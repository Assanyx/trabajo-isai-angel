window.Navbar = function Navbar({
  isAuthenticated, // Asegúrate de recibir esta prop
  favoritesCount,
  cartCount,
  onShowCart,
  onShowFavorites,
  onLoginClick, // Esta prop es crucial
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="index.html" className="text-2xl font-bold text-blue-600">
          NutriPet
        </a>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600">
            Tienda <i className="fas fa-chevron-down ml-1 text-sm"></i>
            </button>
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-50 hidden group-hover:block group-focus-within:block">
                <ul className="py-2 w-40 text-sm text-gray-700">
                  <li><a href="categorias.html?cat=Todos" className="block px-4 py-2 hover:bg-blue-50">Todos</a></li>
                  <li><a href="categorias.html?cat=Croquetas" className="block px-4 py-2 hover:bg-blue-50">Croquetas</a></li>
                  <li><a href="categorias.html?cat=Bocaditos" className="block px-4 py-2 hover:bg-blue-50">Bocaditos</a></li>
                  <li><a href="categorias.html?cat=Premios" className="block px-4 py-2 hover:bg-blue-50">Premios</a></li>
                  
              </ul>
            </div>
          </div>

        {/* Enlace al juego */}
<a
  href="juego.html"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1"
>
  🎮 Juego
</a>

          
          {/* Botón de usuario */}
          <button
            onClick={onLoginClick}
            className="text-gray-700 hover:text-blue-600"
            aria-label="Acceder o registrarse"
          >
            <i className="fas fa-user-circle text-xl"></i>
          </button>

          {/* Botón de Favoritos */}
          <button
            onClick={() => onShowFavorites && onShowFavorites()}
            className="text-gray-700 hover:text-blue-600 relative"
          >
            <i className="fas fa-heart"></i>
            {favoritesCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Botón de Carrito */}
          <button
            onClick={() => onShowCart && onShowCart()}
            className="text-gray-700 hover:text-blue-600 relative"
          >
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Botón de menú móvil (siempre visible en mobile) */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-700 hover:text-blue-600"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)} // Cierra al hacer clic fuera
          >
            <div
              className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg animate-slide-in"
              onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
            >
              <div className="p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 mb-4"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
                <ul className="space-y-4">

                  <li>
  <a
    href="juego.html"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-gray-700 hover:text-blue-600 w-full text-left"
  >
    <i className="fas fa-gamepad mr-2"></i> Juego
  </a>
</li>

                  <li>
                    <details className="group">
                  <summary className="cursor-pointer text-gray-700 hover:text-blue-600">
                    Tienda
                    </summary>
                      <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
                        <li><a href="categorias.html?cat=Todos" className="block hover:text-blue-700">Todos</a></li>
                        <li><a href="categorias.html?cat=Croquetas" className="block hover:text-blue-700">Croquetas</a></li>
                        <li><a href="categorias.html?cat=Bocaditos" className="block hover:text-blue-700">Bocaditos</a></li>
                        <li><a href="categorias.html?cat=Premios" className="block hover:text-blue-700">Premios</a></li>
                        
                      </ul>
                    </details>
                  </li>
                  
                  <li>
                    <button
                      onClick={() => {
                        onLoginClick();
                        setIsMenuOpen(false);
                      }}
                      className="block text-gray-700 hover:text-blue-600 w-full text-left"
                    >
                      <i className="fas fa-user-circle mr-2"></i>{" "}
                      Acceder/Registrarse
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onShowFavorites();
                        setIsMenuOpen(false);
                      }}
                      className="block text-gray-700 hover:text-blue-600 w-full text-left"
                    >
                      <i className="fas fa-heart mr-2"></i> Favoritos (
                      {favoritesCount})
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onShowCart();
                        setIsMenuOpen(false);
                      }}
                      className="block text-gray-700 hover:text-blue-600 w-full text-left"
                    >
                      <i className="fas fa-shopping-cart mr-2"></i> Carrito (
                      {cartCount})
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
