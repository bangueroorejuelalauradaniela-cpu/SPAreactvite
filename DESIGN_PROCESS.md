# Proceso de Diseño - Egeobutterfly

## 📋 Índice
1. [Fase 1: Conceptualización y Planificación](#fase-1-conceptualización-y-planificación)
2. [Fase 2: Definición de Identidad Visual](#fase-2-definición-de-identidad-visual)
3. [Fase 3: Arquitectura Técnica](#fase-3-arquitectura-técnica)
4. [Fase 4: Desarrollo de Componentes](#fase-4-desarrollo-de-componentes)
5. [Fase 5: Integración y Refinamiento](#fase-5-integración-y-refinamiento)

---

## Fase 1: Conceptualización y Planificación

### 1.1 Entendimiento del Problema
Comenzamos identificando el **propósito del proyecto**:
- **Marca**: Egeobutterfly - Lociones técnicas de larga duración
- **Problema a Resolver**: Perfumes ostigantes y de corta duración
- **Solución**: Loción que dura 7 días completos sin ser invasiva

### 1.2 Definición de Audiencia
- **Target**: Personas sofisticadas que buscan elegancia discreta
- **Valores**: Naturalidad, durabilidad, respeto por el espacio personal
- **Tono**: Profesional pero accesible, elegante pero no pretencioso

### 1.3 Creación del Documento `ideas.md`
Documenté **tres enfoques de diseño** potenciales y seleccioné uno:

```
ENFOQUE SELECCIONADO: "Elegancia Minimalista con Calidez Orgánica"
```

**Por qué este enfoque:**
- Refleja la promesa de la marca (elegancia sin ostentación)
- Combina sofisticación moderna con naturalidad
- Diferencia a Egeobutterfly de competidores genéricos

---

## Fase 2: Definición de Identidad Visual

### 2.1 Paleta de Colores

#### Color Primario: Azul Egeo (#1B4965)
```
Decisión: Inspirado en el mar Egeo (Grecia)
Razones:
- Evoca tranquilidad y sofisticación
- Representa profundidad y confiabilidad
- Diferencia de marcas de perfume típicas (rosas, purpuras)
- Funciona bien en interfaces digitales
```

#### Color Secundario: Crema (#F5F1E8)
```
Decisión: Fondo cálido y natural
Razones:
- Suavidad y calidez
- Contraste perfecto con azul Egeo
- Evoca naturalidad y pureza
- Reduce fatiga visual
```

#### Color de Acento: Dorado (#D4AF37)
```
Decisión: Lujo minimalista
Razones:
- Comunica premium sin exceso
- Usado estratégicamente en detalles
- Evoca elegancia y sofisticación
- Complementa la paleta azul-crema
```

### 2.2 Tipografía

#### Títulos: Playfair Display (Serif)
```
Características:
- Elegante y sofisticada
- Peso 600-700 para impacto
- Evoca lujo y tradición
- Perfecta para h1, h2, h3

Ejemplo: "Una Semana de Elegancia Silenciosa"
```

#### Cuerpo: Inter (Sans-serif)
```
Características:
- Legible y moderna
- Peso 400 para cuerpo, 600 para énfasis
- Contrasta bien con Playfair Display
- Excelente en pantallas

Ejemplo: "Fragancia que respeta tu espacio personal"
```

### 2.3 Logo: Mariposa Minimalista
```
Decisión: Símbolo de transformación y belleza
Características:
- Líneas minimalistas y simétricas
- Azul Egeo (#1B4965)
- Sin texto en el logo (solo símbolo)
- Versátil para diferentes tamaños
- Representa: cambio, elegancia, naturaleza
```

---

## Fase 3: Arquitectura Técnica

### 3.1 Stack Tecnológico

```
Frontend:
├── Vite (bundler moderno y rápido)
├── React 19 (componentes reutilizables)
├── TypeScript (tipado estático)
└── Tailwind CSS 4 (utilidades de diseño)

Estructura:
├── client/
│   ├── public/ (favicon, robots.txt)
│   └── src/
│       ├── assets/ (imágenes, recursos)
│       ├── components/ (componentes reutilizables)
│       ├── pages/ (vistas principales)
│       ├── contexts/ (contextos React)
│       ├── hooks/ (hooks personalizados)
│       ├── lib/ (utilidades)
│       ├── App.tsx (rutas)
│       ├── main.tsx (entrada)
│       └── index.css (estilos globales)
```

### 3.2 Razones de Cada Decisión

| Tecnología | Razón |
|-----------|-------|
| **Vite** | Compilación rápida, HMR instantáneo, mejor DX |
| **React 19** | Componentes funcionales, hooks, ecosystem maduro |
| **TypeScript** | Previene errores, mejor autocompletado, mantenibilidad |
| **Tailwind CSS 4** | Utilidades, temas dinámicos, pequeño bundle |

---

## Fase 4: Desarrollo de Componentes

### 4.1 Estructura de Carpetas Escalable

```
src/
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── HeroSection.tsx     # Sección hero
│   ├── ProductShowcase.tsx # Vitrina de producto
│   ├── Footer.tsx          # Pie de página
│   └── ui/                 # Componentes shadcn/ui
│
├── pages/
│   ├── Home.tsx            # Página principal
│   └── NotFound.tsx        # Página 404
│
└── assets/
    └── (imágenes generadas)
```

### 4.2 Componente 1: Header

#### Diseño
```
┌─────────────────────────────────────────────────┐
│ 🦋 Egeobutterfly  │ Inicio Producto Beneficios │ Comprar Ahora │
└─────────────────────────────────────────────────┘
```

#### Características Técnicas
- **Sticky positioning**: Se queda en la parte superior al scroll
- **Navegación dinámica**: Array de items que se mapean
- **Responsive**: Menú hamburguesa en móvil
- **JSX dinámico**: Variables con llaves {}

```typescript
// Ejemplo de JSX dinámico
const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Producto', href: '#producto' },
  // ...
];

{navItems.map((item) => (
  <a key={item.label} href={item.href}>
    {item.label}
  </a>
))}
```

#### Decisiones de Diseño
- **Logo minimalista**: Imagen importada localmente
- **Tipografía serif**: "Egeobutterfly" en Playfair Display
- **Colores**: Azul Egeo para el logo, blanco para fondo
- **Transiciones**: 200ms ease-out para suavidad

### 4.3 Componente 2: HeroSection

#### Diseño
```
┌────────────────────────────────────────────┐
│                                            │
│    [Imagen de fondo con gradiente]        │
│                                            │
│    Una Semana de Elegancia Silenciosa     │
│                                            │
│    Fragancia que respeta tu espacio...    │
│                                            │
│    [Botón: Descubre Egeobutterfly]        │
│                                            │
│              ↓ (scroll indicator)          │
└────────────────────────────────────────────┘
```

#### Características Técnicas
- **Full viewport height**: `h-screen`
- **Background image**: Imagen generada con IA
- **Overlay gradient**: Oscurece la imagen para legibilidad
- **Centered content**: Flexbox con `items-center justify-center`
- **Scroll indicator**: SVG animado con `animate-bounce`

```typescript
// Estructura JSX
<section className="relative w-full h-screen flex items-center justify-center">
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center" 
       style={{ backgroundImage: `url('${backgroundImage}')` }} />
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
  
  {/* Content */}
  <div className="relative z-10 text-center">
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <button>{ctaText}</button>
  </div>
</section>
```

#### Decisiones de Diseño
- **Props opcionales**: Permite reutilización con valores por defecto
- **Tipografía blanca**: Contraste contra imagen oscura
- **Botón prominente**: CTA clara con hover effect
- **Indicador de scroll**: Guía al usuario a explorar más

### 4.4 Componente 3: ProductShowcase

#### Diseño
```
┌──────────────────────────────────────────────────┐
│              El Producto                         │
│                                                  │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │                  │  │ Loción Técnica   │    │
│  │  [Imagen]        │  │ Egeobutterfly    │    │
│  │                  │  │                  │    │
│  │                  │  │ 7 días | 100%    │    │
│  │                  │  │ [Botón Comprar]  │    │
│  └──────────────────┘  └──────────────────┘    │
│                                                  │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│  │ Benefit │ │ Benefit │ │ Benefit │ │ Benefit │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘
└──────────────────────────────────────────────────┘
```

#### Características Técnicas
- **Grid responsivo**: 1 columna móvil, 2 en tablet
- **Array de beneficios**: Mapeado dinámicamente
- **Tarjetas con hover**: Sombra elegante al pasar
- **Imagen con sombra**: Efecto de profundidad

```typescript
// Grid responsivo
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Imagen */}
  {/* Info */}
</div>

// Beneficios mapeados
{benefits.map((benefit) => (
  <div key={benefit.title} className="card-base">
    <div className="text-4xl">{benefit.icon}</div>
    <h4>{benefit.title}</h4>
    <p>{benefit.description}</p>
  </div>
))}
```

#### Decisiones de Diseño
- **Imagen del producto**: Generada con IA para calidad premium
- **Stats visuales**: "7 días" y "100% Natural" destacados
- **Iconos emoji**: Simples pero efectivos
- **Tarjetas con gradiente**: Fondo sutil para profundidad

### 4.5 Componente 4: Footer

#### Diseño
```
┌──────────────────────────────────────────────────┐
│ 🦋 Egeobutterfly  │ Producto  │ Empresa  │ Legal │
│                  │ Beneficios│ Blog     │ Términos
│                  │ Ingredientes│ Sostenibilidad│
│                                                  │
│ © 2026 Egeobutterfly. Todos los derechos       │
│ 📷 👍 𝕏                                         │
└──────────────────────────────────────────────────┘
```

#### Características Técnicas
- **Fondo azul Egeo**: Contrasta con el resto del sitio
- **Estructura modular**: Array de secciones
- **Año dinámico**: `new Date().getFullYear()`
- **Redes sociales**: Emojis como iconos

```typescript
// Secciones dinámicas
const footerSections: FooterSection[] = [
  {
    title: 'Producto',
    links: [...]
  },
  // ...
];

{footerSections.map((section) => (
  <div key={section.title}>
    <h3>{section.title}</h3>
    {section.links.map((link) => (
      <a href={link.href}>{link.label}</a>
    ))}
  </div>
))}
```

#### Decisiones de Diseño
- **Fondo oscuro**: Separa visualmente del contenido
- **Texto claro**: Crema sobre azul Egeo
- **Estructura clara**: Secciones bien organizadas
- **Año dinámico**: Mantenimiento automático

---

## Fase 5: Integración y Refinamiento

### 5.1 Estilos Globales (index.css)

#### Colores Personalizados
```css
:root {
  --primary: #1B4965;           /* Azul Egeo */
  --primary-foreground: #F5F1E8; /* Crema */
  --secondary: #D4AF37;          /* Dorado */
  --muted: #E8E3D8;              /* Gris cálido */
  --accent: #D4AF37;             /* Dorado */
}
```

#### Tipografía Global
```css
h1, h2, h3, h4, h5, h6 {
  @apply font-serif font-bold;
}

body {
  @apply bg-background text-foreground font-sans;
}
```

#### Utilidades Personalizadas
```css
.flex-center {
  @apply flex items-center justify-center;
}

.flex-between {
  @apply flex items-center justify-between;
}

.card-base {
  @apply bg-white rounded-xl border border-border shadow-sm;
}
```

### 5.2 Animaciones y Transiciones

#### Transiciones Suaves
```css
button, a {
  @apply transition-all duration-200;
}
```

#### Animación de Entrada
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

### 5.3 Integración en Home.tsx

```typescript
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
```

**Estructura lógica:**
1. Header (siempre visible)
2. Main (contenido flexible)
3. HeroSection (impacto visual)
4. ProductShowcase (información)
5. Footer (cierre)

---

## 📊 Decisiones Clave de Diseño

### Por qué Minimalismo + Calidez Orgánica

| Aspecto | Decisión | Razón |
|--------|----------|-------|
| **Colores** | Azul + Crema + Dorado | Sofisticación sin frialdad |
| **Tipografía** | Serif + Sans-serif | Elegancia + Legibilidad |
| **Layout** | Asimétrico pero equilibrado | Interés visual sin caos |
| **Espaciado** | Generoso (16px, 24px, 32px) | Respiración visual |
| **Animaciones** | Suaves y sutiles (200-300ms) | Profesionalismo |
| **Imágenes** | Generadas con IA | Calidad premium |

### Principios de Diseño Aplicados

1. **Claridad**: Cada elemento tiene propósito
2. **Jerarquía**: Títulos serif > subtítulos > cuerpo
3. **Consistencia**: Paleta y tipografía uniforme
4. **Accesibilidad**: Contraste suficiente, responsive
5. **Performance**: Tailwind CSS, imágenes optimizadas

---

## 🎯 Resultado Final

### Componentes Logrados
- ✅ Header responsive con navegación dinámica
- ✅ Hero section con imagen de fondo elegante
- ✅ Showcase de producto con grid responsivo
- ✅ Footer modular con secciones dinámicas
- ✅ Página Home que integra todo

### Requisitos Técnicos Cumplidos
- ✅ Vite + React + TypeScript
- ✅ Arquitectura escalable (assets, components, pages)
- ✅ JSX dinámico con variables {}
- ✅ Imágenes importadas localmente
- ✅ className en lugar de class
- ✅ Estilos CSS con Flexbox/Grid
- ✅ README.md profesional

### Calidad de Diseño
- ✅ Paleta de colores cohesiva
- ✅ Tipografía elegante y legible
- ✅ Espaciado profesional
- ✅ Transiciones suaves
- ✅ Responsive en todos los dispositivos
- ✅ Accesibilidad considerada

---

## 🚀 Próximos Pasos Sugeridos

1. **Agregar Testimonios**: Sección con reviews de clientes
2. **Formulario de Contacto**: Capturar leads interesados
3. **Página de Detalles**: Especificaciones técnicas del producto
4. **Blog**: Artículos sobre fragancias y cuidado personal
5. **Carrito de Compras**: Integración e-commerce

---

**Documento creado el 17 de julio de 2026**
**Proyecto: Egeobutterfly - Loción Técnica de Larga Duración**
