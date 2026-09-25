# DESIGN.md — Anggelykids Shows y Eventos

Guía de diseño del proyecto `anggelykids-landingpage`. Documenta las decisiones
visuales y de arquitectura para que cualquier persona (o Claude, en una
sesión futura) pueda extender la landing sin romper la consistencia.

## 1. Dirección de diseño

**Estilo:** Claymorphism (3D suave, "plastilina").

Elegido porque encaja con un negocio de shows infantiles: sensación
juguetona, táctil y de "objeto de juguete" en vez de una interfaz plana de
SaaS. Se aplicó de forma sistemática, no decorativa, sobre los componentes
base de shadcn/ui.

**Reglas del estilo:**

| Elemento | Regla |
|---|---|
| Bordes | Gruesos: `3px` en tarjetas/botones/inputs, `4px` en el paquete destacado |
| Esquinas | `16–24px` en componentes pequeños (botones, inputs); tarjetas grandes pueden llegar a `28–36px` |
| Sombra | Doble: resplandor interior (`inset`) + sombra exterior desplazada (efecto "pegatina") — ver clase `shadow-clay` |
| Presión | Los botones se "hunden" (`translate-y` + cambio a `shadow-clay-pressed`) al hacer click, no solo `scale` |
| Transición | `ease-bounce` (`cubic-bezier(0.34, 1.56, 0.64, 1)`) en vez de `ease-in-out` genérico |
| Accesibilidad | Toda animación respeta `prefers-reduced-motion`; todo elemento clicable lleva `cursor-pointer` |

**Por qué NO se usó la paleta azul/amarillo que sugiere por defecto el
patrón "Claymorphism / Kids Learning":** el negocio ya tiene una identidad
de marca (logo Anggelykids) en morado/rosa/amarillo. Se mantuvo esa
paleta y se le aplicó la técnica visual del claymorphism, en vez de
adoptar los colores sugeridos por defecto.

## 2. Paleta de color

Definida en `tailwind.config.ts` bajo `colors.angely` y como variables CSS
en `app/globals.css` (`--primary`, `--secondary`, `--accent`, etc.).

| Token | Uso | Valor base |
|---|---|---|
| `angely-purple-*` | Color primario de marca (títulos, fondos oscuros, CTA principal) | `600–900`: `#7C3AED` → `#3D1F73` |
| `angely-pink-*` | Color secundario (acentos, precios, CTA WhatsApp alternativo) | `500–700`: `#FF5CA8` → `#DB2777` |
| `angely-yellow-*` | Acento (badges, detalles decorativos) | `300–500`: `#FFE270` → `#FBC02D` |
| `angely-teal-*` | Acento decorativo secundario (hero, blobs) | `300–400` |
| `#25D366` / `#1DA851` | Verde WhatsApp (fijo, no forma parte de la paleta de marca) | Botón flotante y CTAs de WhatsApp |

Las variables shadcn (`--background`, `--foreground`, `--card`,
`--muted`, `--border`, `--ring`, etc.) están mapeadas a tonos de este
mismo morado/rosa en HSL, no a los grises neutros por defecto de shadcn.

## 3. Tipografía

**Pairing:** Fredoka (headings) + Nunito (body) — validado contra la base
de datos de pairings como "Playful Creative", categoría Kids/Entertainment.

- Cargadas vía `next/font/google` en `app/layout.tsx` (self-hosted, sin
  layout shift, sin `<link>` externo).
- Variables CSS: `--font-heading`, `--font-body` → mapeadas en
  `tailwind.config.ts` como `font-heading` / `font-body`.
- Todo `h1–h5` usa `font-heading` automáticamente (ver `app/globals.css`).

## 4. Sombras y superficies (`shadow-clay-*`)

Definidas en `tailwind.config.ts` → `theme.extend.boxShadow`:

- `shadow-clay` — estado por defecto (botones, tarjetas flotantes, badges grandes)
- `shadow-clay-pressed` — estado `active` (simula que el objeto se hunde)
- `shadow-clay-pink` — variante para elementos sobre fondo/borde rosa
- `shadow-clay-card` — sombra más sutil para tarjetas de contenido (paquetes, value props)

Regla: **nunca combinar `shadow-clay-*` con `shadow-lg`/`shadow-sm` de
Tailwind en el mismo elemento** — son dos lenguajes visuales distintos.

## 5. Componentes (`components/ui/`)

Primitivas al estilo shadcn/ui, todas ya adaptadas al sistema claymorphism
(no son el shadcn "de fábrica"):

`button.tsx` · `card.tsx` · `badge.tsx` · `tabs.tsx` · `accordion.tsx` ·
`input.tsx` · `textarea.tsx` · `label.tsx` · `select.tsx`

**Variantes de `Button`:** `default` (morado), `secondary` (rosa),
`accent` (amarillo), `outline`, `ghost`, `whatsapp` (verde, para todo CTA
de cotización), `link`.

Regla de uso: **cualquier CTA que abra WhatsApp usa `variant="whatsapp"`**,
nunca `default`/`secondary`, para que el usuario reconozca visualmente la
acción antes de leer el texto.

## 6. Componentes de sección (`components/`)

| Componente | Responsabilidad |
|---|---|
| `navbar.tsx` | Logo, ancla de navegación, CTA de WhatsApp, menú responsive |
| `hero.tsx` | Propuesta principal + CTAs (WhatsApp / ver catálogo) |
| `value-props.tsx` | 4 tarjetas de diferenciadores |
| `packages-tabs.tsx` | Orquesta las 3 pestañas de categorías, usa `package-card.tsx` |
| `package-card.tsx` | Tarjeta individual: precio, duración, inclusiones, obsequio, cortesía, CTA |
| `quick-quote-form.tsx` | Formulario → arma mensaje → abre WhatsApp (no envía a backend) |
| `faq.tsx` | Acordeón de preguntas frecuentes |
| `footer.tsx` | Enlaces, redes, aviso de "no incluye movilidad" |
| `whatsapp-float-button.tsx` | Botón flotante fijo, `bottom-6 right-6 z-50` |

## 7. Datos y contenido (`lib/packages-data.ts`)

**Fuente única de verdad** de todo el catálogo. Ningún componente hardcodea
un paquete, precio o lista de inclusiones — todos leen de `PACKAGES`.

```ts
interface PartyPackage {
  id: string;
  category: "clasicos" | "huntrix" | "sensorial";
  name: string;
  price: number;
  priceLabel: string;   // "S/ 699"
  duration: string;
  includes: string[];
  gifts: string[];       // "Obsequio"
  courtesy?: string[];   // "Cortesía" — badge verde si existe
  featured?: boolean;    // marca "Más elegido", borde 4px
}
```

Para agregar/editar un paquete: editar el arreglo `PACKAGES`. Para agregar
una categoría nueva: añadirla a `PackageCategory` y a `CATEGORY_LABELS`, y
listarla en `CATEGORIES` dentro de `packages-tabs.tsx`.

## 8. Integración de WhatsApp

Toda la lógica vive en `lib/utils.ts`:

- `buildWhatsAppUrl(message, phone?)` — arma `https://wa.me/<phone>?text=<encoded>`. Teléfono por defecto: `51957189685`.
- `quotePackageMessage(name, price)` — mensaje estándar para el botón de cada tarjeta de paquete.

Regla: **no construir URLs de WhatsApp a mano en ningún componente** —
siempre pasar por estos helpers, para que un cambio de número o de
formato de mensaje se haga en un solo lugar.

## 9. Accesibilidad (checklist aplicado)

- [x] Contraste de texto ≥ 4.5:1 en combinaciones texto/fondo definidas
- [x] `focus-visible:ring-2` en todos los elementos interactivos (nunca se quitó el outline de foco)
- [x] Objetivos táctiles ≥ 44px de alto (`h-11` = 44px es el tamaño mínimo de botón)
- [x] `cursor-pointer` en todo elemento clicable
- [x] `prefers-reduced-motion: reduce` desactiva animaciones/transiciones globalmente
- [x] Sin emojis como íconos — todos los íconos son SVG de `lucide-react`
- [x] Imágenes vía `next/image` (el logo, lazy-loading y tamaño reservado automático)

## 10. Stack técnico

Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui (adaptado) ·
Radix UI (`@radix-ui/react-tabs`, `-accordion`, `-label`, `-slot`) ·
`lucide-react` para íconos · `class-variance-authority` + `tailwind-merge`
para variantes de componentes.

No hay backend ni base de datos: el formulario cotizador no persiste
datos, solo arma y abre un enlace de WhatsApp.

## 11. Cómo extender esto sin romper el sistema

1. **Nuevo color** → agregarlo bajo `colors.angely` en `tailwind.config.ts`, nunca un hex suelto dentro de un componente.
2. **Nuevo componente de UI** → debe llevar borde grueso (`border-2`/`border-[3px]`) + alguna variante de `shadow-clay-*` si es interactivo o flota sobre el fondo.
3. **Nuevo paquete/categoría** → solo tocar `lib/packages-data.ts`.
4. **Nuevo CTA** → usar `Button` con la variante correspondiente; si abre WhatsApp, pasar siempre por `buildWhatsAppUrl`.
