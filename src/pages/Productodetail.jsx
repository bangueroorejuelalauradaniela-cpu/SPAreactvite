
import { Link, useParams, Navigate } from "react-router-dom";
import products from "../data/products";
import { useFavorites } from "../context/FavoritesContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { toggleFavorite, isFavorite } = useFavorites();

  // Buscamos el producto correspondiente al ID de la URL
  const product = products.find((item) => item.id === Number(id));

  // Si el producto no existe, volvemos al catálogo
  if (!product) {
    return <Navigate to="/catalogo" replace />;
  }

  const favorite = isFavorite(product.id);

  return (
    <section className="min-h-screen bg-background px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/catalogo"
          className="mb-8 inline-flex items-center gap-2 text-primary hover:underline"
        >
          ← Volver al catálogo
        </Link>

        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm md:grid-cols-2 md:p-12">
          <div className="flex min-h-80 items-center justify-center rounded-2xl bg-muted p-6">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[450px] w-full object-contain"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Egeobutterfly · Nuestra colección
            </p>

            <h1 className="mb-5 text-3xl font-bold text-primary md:text-5xl">
              {product.name}
            </h1>

            <p className="mb-6 leading-8 text-muted-foreground">
              {product.description}
            </p>

            <p className="mb-8 text-2xl font-bold text-primary">
              {typeof product.price === "number" && product.price > 0
                ? `$${product.price.toLocaleString("es-CO")}`
                : "Precio por definir"}
            </p>

            <button
              type="button"
              onClick={() => toggleFavorite(product)}
              aria-pressed={favorite}
              className="w-full rounded-xl border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white sm:w-auto"
            >
              {favorite
                ? "♥ Quitar de favoritos"
                : "♡ Agregar a favoritos"}
            </button>

            <p className="mt-5 text-sm text-muted-foreground">
              Tus favoritos se mantienen al navegar entre las páginas de la tienda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
