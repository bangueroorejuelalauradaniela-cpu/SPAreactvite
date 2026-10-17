
import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useFavorites } from "../context/FavoritesContext";

export default function Catalogo() {

  console.log("Productos cargados:", products);
  console.log("Cantidad de productos:", products.length);
console.log("Lista de productos:", products);

  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [message, setMessage] = useState("");

  const handleFavorite = (product) => {
    const alreadyFavorite = isFavorite(product.id);

    toggleFavorite(product);

    setMessage(
      alreadyFavorite
        ? `${product.name} se eliminó de favoritos.`
        : `${product.name} se agregó a favoritos.`
    );
  };

  return (
    <section className="min-h-screen bg-muted/30 px-4 py-12">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Nuestro Catálogo
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra Loción Técnica Egeobutterfly.
          </p>

          <Link
            to="/favoritos"
            className="inline-block mt-5 px-5 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            ♥ Mis favoritos ({favorites.length})
          </Link>
        </div>

        {message && (
          <div
            role="status"
            aria-live="polite"
            className="mb-8 rounded-lg border border-green-200 bg-green-50 p-4 text-center text-green-800"
          >
            {message}
          </div>
        )}

        {products.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            No hay productos disponibles en este momento.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const favorite = isFavorite(product.id);

              return (
                <article
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-muted flex justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-contain"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-3">
                      {product.name}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between gap-4 mb-5">
                      <span className="text-lg font-bold text-primary">
                        {typeof product.price === "number" &&
                        product.price > 0
                          ? `$${product.price.toLocaleString("es-CO")}`
                          : "Precio por definir"}
                      </span>

                      <Link
                        to={`/catalogo/${product.id}`}
                        className="px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all"
                      >
                        Ver detalle
                      </Link>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleFavorite(product)}
                      aria-pressed={favorite}
                      aria-label={
                        favorite
                          ? `Quitar ${product.name} de favoritos`
                          : `Agregar ${product.name} a favoritos`
                      }
                      className={`w-full rounded-lg border px-4 py-3 font-semibold transition-colors ${
                        favorite
                          ? "border-pink-500 bg-pink-50 text-pink-700"
                          : "border-border text-primary hover:bg-muted"
                      }`}
                    >
                      {favorite ? "♥ En favoritos" : "♡ Agregar a favoritos"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
