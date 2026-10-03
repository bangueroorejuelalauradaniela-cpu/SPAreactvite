import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  const totalProducts = favorites.length;

  const totalValue = favorites.reduce(
    (total, product) => total + (product.price || 0),
    0
  );

  return (
    <section className="min-h-screen bg-muted/30 px-4 py-12">
      <div className="container mx-auto max-w-6xl">

        {/* Header de favoritos */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-primary mb-3">
             Mis Favoritos
          </h1>

          <p className="text-foreground/70">
            Guarda aquí los productos que más te gustan.
          </p>
        </div>

        {/* Resumen */}
        {favorites.length > 0 && (
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
            <div className="bg-white rounded-xl shadow-sm px-6 py-4 text-center">
              <p className="text-sm text-foreground/60">
                Productos favoritos
              </p>

              <p className="text-2xl font-bold text-primary">
                {totalProducts}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm px-6 py-4 text-center">
              <p className="text-sm text-foreground/60">
                Valor total
              </p>

              <p className="text-2xl font-bold text-primary">
                ${totalValue.toLocaleString("es-CO")}
              </p>
            </div>
          </div>
        )}

        
        {favorites.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center max-w-xl mx-auto">
            <div className="text-5xl mb-4">
            
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Aún no tienes favoritos
            </h2>

            <p className="text-foreground/60">
              Explora nuestros productos y guarda los que más te gusten.
            </p>
          </div>
        ) : (

          /* Lista de favoritos */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favorites.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow"
              >
                {/* Imagen */}
                <div className="sm:w-40 h-48 sm:h-auto bg-muted flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Información */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-primary mb-2">
                      {product.name}
                    </h2>

                    {product.description && (
                      <p className="text-sm text-foreground/60 mb-4">
                        {product.description}
                      </p>
                    )}

                    <p className="text-lg font-bold">
                      ${product.price?.toLocaleString("es-CO")}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleFavorite(product)}
                    className="mt-5 w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                     Quitar de favoritos
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

