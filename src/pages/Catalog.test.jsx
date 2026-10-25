
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FavoritesProvider } from "../context/FavoritesContext";
import products from "../data/products";
import Catalogo from "./Catalog";

describe("Catálogo", () => {
  it("muestra el título y los productos disponibles", () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <Catalogo />
        </FavoritesProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /Nuestro Cat/ })
    ).toBeInTheDocument();

    if (products.length > 0) {
      expect(
        screen.getByText(products[0].name)
      ).toBeInTheDocument();
    }
  });
});
