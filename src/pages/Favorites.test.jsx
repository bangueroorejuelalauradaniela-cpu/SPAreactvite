
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FavoritesProvider } from "../context/FavoritesContext";
import Favorites from "./Favorites";

describe("Favoritos", () => {
  it("muestra el mensaje cuando no hay productos favoritos", () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <Favorites />
        </FavoritesProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /Aún no tienes favoritos/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Explorar catálogo/i })
    ).toBeInTheDocument();
  });
});
