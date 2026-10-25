
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("muestra el logo y los enlaces de navegación", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("img", { name: /Egeobutterfly Logo/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Inicio" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Favoritos" })
    ).toBeInTheDocument();
  });
});
