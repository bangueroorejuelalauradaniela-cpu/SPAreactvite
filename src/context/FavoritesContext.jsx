
import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (favorite) => favorite.id === product.id
      );

      if (alreadyFavorite) {
        return currentFavorites.filter(
          (favorite) => favorite.id !== product.id
        );
      }

      return [
        ...currentFavorites,
        { ...product, quantity: 1 },
      ];
    });
  };

  const isFavorite = (productId) => {
    return favorites.some(
      (favorite) => favorite.id === productId
    );
  };

  const increaseQuantity = (productId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: (Number(product.quantity) || 1) + 1,
            }
          : product
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: Math.max(
                1,
                (Number(product.quantity) || 1) - 1
              ),
            }
          : product
      )
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
