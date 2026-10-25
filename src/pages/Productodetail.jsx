
import { Link, useParams, Navigate } from "react-router-dom";
import products from "../data/products";
import { useFavorites } from "../context/FavoritesContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { toggleFavorite, isFavorite } = useFavorites();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <Navigate to="/catalogo" replace />;
  }

  const favorite = isFavorite(product.id);

  return (
    <section className="min-h-screen bg-muted/30 px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/catalogo"
          className="mb-8 inline-flex items-center gap-2 text-primary hover:underline"
        >
          ← Volver al catálogo
        </Link>

        <article className="grid grid-cols-1 gap-10 overflow-hidden rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="flex min-h-72 items-center justify-center rounded-xl bg-muted/50 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-96 w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Egeobutterfly
            </p>

            <h1 className="mb-5 text-3xl font-serif font-bold text-primary md:text-4xl">
              {product.name}
            </h1>

            <p className="mb-6 leading-relaxed text-foreground/80">
              {product.description}
            </p>

            <p className="mb-8 text-2xl font-bold text-primary">
              {typeof product.price === "number" &&
              product.price > 0
                ? `$${product.price.toLocaleString("es-CO")}`
                : "Precio por definir"}
            </p>

            <button
              type="button"
              onClick={() => toggleFavorite(product)}
              aria-pressed={favorite}
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {favorite
                ? "♥ Quitar de favoritos"
                : "♡ Agregar a favoritos"}
            </button>

            <Link
              to="/favoritos"
              className="mt-4 text-center text-primary hover:underline"
            >
              Ver mis favoritos
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
