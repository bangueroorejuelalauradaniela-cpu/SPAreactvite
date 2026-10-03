import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <main>
      <h1>Mis favoritos ❤️</h1>

      {favorites.length === 0 ? (
        <p>No tienes productos favoritos todavía.</p>
      ) : (
        <section>
          {favorites.map((product) => (
            <article key={product.id}>
              <img src={product.image} alt={product.name} />

              <h2>{product.name}</h2>

              <button onClick={() => toggleFavorite(product)}>
                ❤️ Quitar de favoritos
              </button>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Favorites;