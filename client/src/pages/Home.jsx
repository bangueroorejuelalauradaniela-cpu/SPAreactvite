import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

/**
 * Home Page - Egeobutterfly
 * Design: Elegancia Minimalista con Calidez Organica
 * Componentes principales:
 * - Header: Navegacion y branding
 * - HeroSection: Seccion principal con CTA
 * - ProductShowcase: Informacion del producto y beneficios
 * - Footer: Enlaces e informacion de contacto
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
