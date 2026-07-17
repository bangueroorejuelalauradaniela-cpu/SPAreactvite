/**
 * Header Component
 * Design: Elegancia Minimalista con Calidez Orgánica
 * - Navegación limpia y sofisticada
 * - Logo minimalista (mariposa)
 * - Paleta: Azul Egeo (#1B4965) con acentos dorados
 * - Transiciones suaves y elegantes
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Producto', href: '#producto' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/manus-storage/egeobutterfly-logo_f9c6ebd7.png"
            alt="Egeobutterfly Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-serif font-bold text-primary">
            Egeobutterfly
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <button className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all duration-200 font-semibold">
          Comprar Ahora
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all duration-200 font-semibold">
              Comprar Ahora
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
