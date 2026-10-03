import { Link } from "react-router-dom";
import products from "../data/products";

export default function Catalogo() {
  return (
    <section className="min-h-screen bg-muted/30 px-4 py-12">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Nuestro Catálogo
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra Loción Técnica Egeobutterfly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-muted flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-contain"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-3">
                  {product.name}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {product.description}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-bold text-primary">
                    {product.price > 0
                      ? `$${product.price.toLocaleString("es-CO")}`
                      : "Precio por definir"}
                  </span>

                  <Link
                    to={`/catalogo/${product.id}`}
                    className="px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Ver detalle
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}