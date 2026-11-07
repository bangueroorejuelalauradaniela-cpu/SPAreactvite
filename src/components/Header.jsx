
import { useState } from "react";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Catálogo", to: "/catalogo" },
  { label: "Favoritos", to: "/favoritos" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { usuario, logout, cargando } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  const getLinkClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive
        ? "text-primary font-bold"
        : "text-foreground hover:text-primary"
    }`;

  const authLinkClass =
    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Egeobutterfly Logo"
            className="w-10 h-10"
          />

          <span className="text-2xl font-serif font-bold text-primary">
            Egeobutterfly
          </span>
        </Link>

        {/* Navegación escritorio */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={getLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Sesión escritorio */}
        <div className="hidden md:flex items-center gap-3">
          {!cargando && (
            usuario ? (
              <>
                <span className="text-sm text-foreground">
                  Hola, {usuario.nombre || usuario.email}
                </span>

                <button
                  type="button"
                  onClick={handleLogout}
                  className={`${authLinkClass} bg-muted text-foreground hover:bg-primary hover:text-white`}
                >
                  <LogOut size={18} />
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className={`${authLinkClass} bg-primary text-white hover:opacity-90`}
              >
                <LogIn size={18} />
                Iniciar sesión
              </Link>
            )
          )}
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `${getLinkClass({ isActive })} py-2`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Sesión móvil */}
            {!cargando && (
              usuario ? (
                <>
                  <span className="text-sm text-foreground py-2">
                    Hola, {usuario.nombre || usuario.email}
                  </span>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className={`${authLinkClass} bg-muted text-foreground hover:bg-primary hover:text-white`}
                  >
                    <LogOut size={18} />
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className={`${authLinkClass} bg-primary text-white hover:opacity-90`}
                >
                  <LogIn size={18} />
                  Iniciar sesión
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
