# Egeobutterfly - Design Philosophy

## Enfoque Seleccionado: "Elegancia Minimalista con Calidez Orgánica"

### Design Movement
Minimalismo contemporáneo con influencias de diseño orgánico y natural. Inspirado en la belleza de la naturaleza (mariposas, flores) combinado con la sofisticación del diseño suizo moderno.

### Core Principles
1. **Claridad Funcional**: Cada elemento tiene propósito. No hay decoración innecesaria, solo belleza intencional.
2. **Naturalidad Orgánica**: Formas suaves, curvas naturales y elementos inspirados en la naturaleza (no geométrico puro).
3. **Elegancia Discreta**: La marca comunica lujo a través de la sutileza, no de la ostentación.
4. **Experiencia Sensorial**: El diseño refleja la promesa de la loción: delicada, duradera y no invasiva.

### Color Philosophy
- **Primario**: Azul profundo (Aegean Blue - `#1B4965`) - evoca el mar Egeo, tranquilidad y sofisticación
- **Secundario**: Crema cálida (`#F5F1E8`) - suavidad, calidez, naturalidad
- **Acentos**: Dorado suave (`#D4AF37`) - lujo minimalista, toque de elegancia
- **Neutro**: Gris cálido (`#8B8680`) - equilibrio y profesionalismo

La paleta comunica lujo accesible, naturalidad y durabilidad.

### Layout Paradigm
- Asimétrico pero equilibrado
- Uso estratégico de whitespace para respiración visual
- Secciones con flujo vertical natural
- Elementos flotantes y capas sutiles para profundidad
- No centrado uniformemente; preferir alineaciones alternadas

### Signature Elements
1. **Mariposa Estilizada**: Logo minimalista que representa transformación y belleza
2. **Líneas Orgánicas Suaves**: Divisores y bordes curvados que evocan movimiento natural
3. **Tipografía Contrastante**: Serif elegante para títulos + sans-serif limpio para cuerpo

### Interaction Philosophy
- Transiciones suaves y naturales (no abruptas)
- Hover effects sutiles que revelan información
- Animaciones que reflejan movimiento natural (como una mariposa)
- Micro-interacciones que comunican feedback sin distraer

### Animation
- Duraciones: 200-300ms para transiciones principales
- Easing: `cubic-bezier(0.23, 1, 0.32, 1)` para entrada suave
- Evitar animaciones frenéticas; preferir movimiento elegante y controlado
- Animaciones de entrada en cascada para listas y elementos
- Respeto a `prefers-reduced-motion`

### Typography System
- **Títulos (Display)**: Serif elegante (Georgia o similar) - peso 700
- **Subtítulos (Heading)**: Serif - peso 600
- **Cuerpo (Body)**: Sans-serif limpio (System fonts) - peso 400
- **Énfasis**: Sans-serif - peso 600
- Jerarquía clara mediante tamaño y peso, no solo color

### Brand Essence
**Posicionamiento**: Egeobutterfly es la loción para personas que buscan elegancia discreta, durabilidad sin compromiso y una experiencia olfativa que respeta su espacio personal.

**Personalidad**: Sofisticada, confiable, natural, reflexiva.

### Brand Voice
- Tonalidad: Elegante pero accesible, informativa sin ser técnica
- Microcopy: Evitar jerga; comunicar beneficios con claridad poética
- Ejemplos:
  - ✅ "Una semana de elegancia silenciosa"
  - ✅ "Fragancia que respeta tu espacio"
  - ❌ "Perfume de larga duración"
  - ❌ "Bienvenido a nuestro sitio"

### Wordmark & Logo
Logotipo: Mariposa estilizada con líneas minimalistas, símbolo de transformación y belleza. Sin texto en el logo; solo el símbolo gráfico en azul Egeo.

### Signature Brand Color
**Azul Egeo** (`#1B4965`) - profundo, confiable, sofisticado. Evoca el mar Egeo, la naturaleza y la tranquilidad.

---

## Decisiones de Estilo

- Usar Tailwind CSS para mantener consistencia
- Implementar divisores orgánicos (SVG waves) entre secciones
- Gradientes sutiles en fondos para profundidad
- Espaciado generoso (16px, 24px, 32px) para respiración visual
- Bordes redondeados moderados (8px-12px) para suavidad sin exceso
