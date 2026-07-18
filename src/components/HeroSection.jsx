import heroImage from "../assets/hero.png";
export default function HeroSection({
  title = "Una Semana de Elegancia Silenciosa",
  subtitle = "Fragancia que respeta tu espacio personal. Duradera, sofisticada, discreta.",
  ctaText = "Descubre Egeobutterfly",
  backgroundImage = heroImage,
}) {
  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          {subtitle}
        </p>

        {/* CTA Button */}
        <button className="px-8 py-4 bg-primary hover:bg-opacity-90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          {ctaText}
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
