import logo from "../assets/logo.png";
const footerSections = [
  {
    title: 'Producto',
    links: [
      { label: 'Características', href: '#' },
      { label: 'Beneficios', href: '#' },
      { label: 'Ingredientes', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nosotros', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Sostenibilidad', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'Instagram', icon: '📷', href: '#' },
  { name: 'Facebook', icon: '👍', href: '#' },
  { name: 'Twitter', icon: '𝕏', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                 src={logo}
                alt="Egeobutterfly"
                className="w-8 h-8 bg-primary-foreground rounded-full p-1"
              />
              <span className="font-serif font-bold text-lg">Egeobutterfly</span>
            </div>
            <p className="text-sm opacity-90">
              Una semana de elegancia silenciosa. Fragancia sofisticada que respeta tu espacio personal.
            </p>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm opacity-80">
            © {currentYear} Egeobutterfly. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-lg hover:opacity-80 transition-opacity"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
