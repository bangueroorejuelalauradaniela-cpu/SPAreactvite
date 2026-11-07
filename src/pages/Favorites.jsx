
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const {
    favorites,
    toggleFavorite,
    increaseQuantity,
    decreaseQuantity,
  } = useFavorites();

  const totalProducts = favorites.length;

  const totalUnits = favorites.reduce(
    (total, product) => total + (product.quantity || 1),
    0
  );

  const totalValue = favorites.reduce(
    (total, product) =>
      total +
      (Number(product.price) || 0) * (product.quantity || 1),
    0
  );

  const formatPrice = (price) =>
    `$${Number(price).toLocaleString("es-CO")}`;

  return (
    <section className="min-h-screen bg-muted/30 px-4 py-12">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-primary mb-3">
            Mis Favoritos
          </h1>

          <p className="text-foreground/70">
            Guarda tus productos favoritos y selecciona
            las cantidades que deseas comprar.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            to="/catalogo"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
          >
            ← Volver al catálogo
          </Link>

          <Link
            to="/"
            className="inline-block px-6 py-3 border border-primary text-primary rounded-lg hover:bg-muted transition"
          >
            Ir al inicio
          </Link>
        </div>

        {favorites.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center max-w-xl mx-auto">
            <div className="text-5xl mb-4" aria-hidden="true">
              ♡
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Aún no tienes favoritos
            </h2>

            <p className="text-foreground/60 mb-6">
              Explora nuestros productos y guarda los que más te gusten.
            </p>

            <Link
              to="/catalogo"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all"
            >
              Explorar catálogo
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {favorites.map((product) => {
                const quantity = product.quantity || 1;
                const price = Number(product.price) || 0;
                const subtotal = price * quantity;

                return (
                  <article
                    key={product.id}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow"
                  >
                    {/* Imagen */}
                    <div className="sm:w-40 h-48 sm:h-auto bg-muted flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                        onError={(event) => {
                          event.currentTarget.style.visibility = "hidden";
                        }}
                      />
                    </div>

                    
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
                          {price > 0
                            ? formatPrice(price)
                            : "Precio por definir"}
                        </p>

                        
                        <div className="mt-5">
                          <p className="text-sm font-medium mb-2">
                            Cantidad
                          </p>

                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(product.id)}
                              disabled={quantity <= 1}
                              aria-label={`Disminuir cantidad de ${product.name}`}
                              className="w-9 h-9 rounded-lg border border-primary text-primary font-bold text-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted"
                            >
                              −
                            </button>

                            <span className="font-semibold text-lg min-w-5 text-center">
                              {quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => increaseQuantity(product.id)}
                              aria-label={`Aumentar cantidad de ${product.name}`}
                              className="w-9 h-9 rounded-lg bg-primary text-white font-bold text-xl hover:opacity-90"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <p className="font-semibold text-primary mt-4">
                          Subtotal:{" "}
                          {price > 0
                            ? formatPrice(subtotal)
                            : "Precio por definir"}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleFavorite(product)}
                        className="mt-5 w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Quitar de favoritos
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

           
            <div className="bg-white rounded-2xl shadow-sm p-6 max-w-xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">
                Resumen de compra
              </h2>

              <div className="flex justify-between mb-4">
                <span className="text-foreground/70">
                  Productos favoritos
                </span>
                <span className="font-semibold">
                  {totalProducts}
                </span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="text-foreground/70">
                  Unidades seleccionadas
                </span>
                <span className="font-semibold">
                  {totalUnits}
                </span>
              </div>

              <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="text-lg font-semibold">
                  Total
                </span>

                <span className="text-2xl font-bold text-primary">
                  {totalValue > 0
                    ? formatPrice(totalValue)
                    : "Precio por definir"}
                </span>
              </div>

              <button
                type="button"
                disabled={totalValue <= 0}
                className="w-full mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Comprar ahora
              </button>

              <p className="text-xs text-center text-foreground/50 mt-3">
                La compra será una simulación, sin cobros reales.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
