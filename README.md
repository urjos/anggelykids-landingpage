# Anggelykids Shows y Eventos — Landing Page

Landing page de alta conversión construida con **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS** y componentes al estilo **shadcn/ui**.

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx        # Fuentes (Fredoka + Nunito) y metadata SEO
  page.tsx           # Ensambla todas las secciones
  globals.css         # Variables de tema y utilidades
components/
  navbar.tsx
  hero.tsx
  value-props.tsx
  packages-tabs.tsx   # Tabs de shadcn con las 3 categorías de paquetes
  package-card.tsx     # Tarjeta individual de paquete
  quick-quote-form.tsx # Formulario -> mensaje de WhatsApp prellenado
  faq.tsx
  footer.tsx
  whatsapp-float-button.tsx
  ui/                 # Primitivas shadcn (button, card, badge, tabs, accordion, input, textarea, label, select)
lib/
  packages-data.ts     # Catálogo completo de paquetes (fuente única de verdad)
  utils.ts             # cn() + helpers de WhatsApp
```

## Editar el catálogo de paquetes

Todo el contenido de precios, inclusiones, obsequios y cortesías vive en
`lib/packages-data.ts`. Para agregar, quitar o modificar un paquete, edita el
arreglo `PACKAGES` — el resto de la UI (tarjetas, tabs, dropdown del
cotizador) se actualiza automáticamente.

## WhatsApp

Todos los CTAs usan `buildWhatsAppUrl()` en `lib/utils.ts`, que arma:

```
https://wa.me/51957189685?text=<mensaje codificado>
```

Cambia el número ahí si es necesario.

## Pendiente antes de producción

- Reemplazar `public/logo.png` si se quiere una versión optimizada (SVG o PNG
  con fondo transparente en mayor resolución).
- Conectar el formulario cotizador a un backend/CRM si se requiere guardar
  leads además de enviarlos por WhatsApp.
- Revisar textos legales/políticas de privacidad si se agregan formularios
  que recolecten datos personales.
