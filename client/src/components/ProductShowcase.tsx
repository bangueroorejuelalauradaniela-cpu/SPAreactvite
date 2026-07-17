/**
 * ProductShowcase Component
 * Design: Elegancia Minimalista con Calidez Orgánica
 * - Imagen del producto con sombra elegante
 * - Información de beneficios con iconos
 * - Paleta: Azul Egeo + Dorado + Crema
 */

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    title: 'Durabilidad de 7 Días',
    description: 'Fragancia que persiste durante una semana completa sin necesidad de reaplicación.',
    icon: '⏱️',
  },
  {
    title: 'Fórmula No Invasiva',
    description: 'Presencia sutil y discreta que respeta el espacio personal de quienes te rodean.',
    icon: '🌸',
  },
  {
    title: 'Ingredientes Naturales',
    description: 'Elaborada con extractos naturales y tecnología avanzada de liberación sostenida.',
    icon: '🍃',
  },
  {
    title: 'Aplicación Versátil',
    description: 'Perfecta para uso diario, profesional o especial. Una loción para todas las ocasiones.',
    icon: '✨',
  },
];

export default function ProductShowcase() {
  return (
    <section id="producto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            El Producto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo Egeobutterfly revoluciona tu experiencia con la fragancia personal.
          </p>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
              <img
                src="/manus-storage/egeobutterfly-product_b592169f.png"
                alt="Egeobutterfly Loción"
                className="relative w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-serif font-bold text-primary">
              Loción Técnica Egeobutterfly
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Una innovación en el mundo de las fragancias personales. Nuestra fórmula exclusiva combina tecnología de liberación sostenida con ingredientes naturales premium para ofrecerte una experiencia olfativa incomparable.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">7 días</div>
                <div className="text-sm text-muted-foreground">Duración</div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
            </div>

            {/* CTA */}
            <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 w-full md:w-auto">
              Comprar Ahora
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-gradient-to-br from-white to-muted p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                {benefit.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
