# Dua Marketing — Sitio Web

Sitio oficial de **Dua Marketing** (estrategia, redes sociales, branding y publicidad digital).
Migrado a **[Astro](https://astro.build)** con diseño personalizado en CSS.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo → http://localhost:4321
npm run build      # build de producción → dist/
npm run preview    # previsualizar el build
```

## Estructura

```
src/
├── components/   Nav, Footer, Preloader, Icon, ProjectCard, CtaPanel
├── data/site.ts  ← TODO el contenido editable (servicios, proyectos,
│                   metas, testimonios, FAQ, datos de contacto)
├── layouts/      BaseLayout (SEO, fuentes, nav, footer)
├── pages/        index · servicios · trabajos · contacto · 404
├── scripts/      main.ts (menú móvil, filtros, lightbox, formulario)
└── styles/       global.css (sistema de diseño "lujo oscuro")
public/           profecional.png, favicon.svg, robots.txt
```

## Personalizar el contenido

Casi todo el texto vive en **`src/data/site.ts`**:

- `site` → correo, Instagram, horario, endpoint de Formspree, dominio
- `goals` → metas 2026 (los 4 números grandes)
- `services` → los 6 servicios con sus features
- `projects` → portafolio (imágenes de Unsplash de ejemplo — reemplázalas)
- `testimonials`, `processSteps`, `faqs`

### ⚠️ Contenido de ejemplo

Los proyectos, testimonios, métricas e imágenes son **ejemplos realistas** para que el sitio se vea completo. Reemplázalos en `src/data/site.ts` con tus casos reales (y sube tus imágenes a `public/` o usa URLs propias).

## Dominio y SEO

En `astro.config.mjs` (`site:`) y `public/robots.txt` está configurado `https://duamarketing.com`.
Si tu dominio final es otro, cámbialo en ambos archivos (y en `BaseLayout.astro` si lo necesitas).
El sitemap se genera automáticamente (`@astrojs/sitemap`) al hacer build.

## Formulario de contacto

Usa **Formspree** (`site.formspreeEndpoint` en `site.ts`). El ID actual es el del sitio original;
si cambias de endpoint, edita solo ese valor.

## Deploy recomendado

- **Vercel** / **Netlify** / **Cloudflare Pages**: conectar el repo, framework preset **Astro**, sin configuración extra.
- **GitHub Pages**: requiere `base: '/Dua'` en `astro.config.mjs` y actualizar los links internos o usar un dominio propio / User Page.

## Historial

El sitio original (HTML/CSS/JS estático) está respaldado en `dua-original-backup.zip` (carpeta temporal del sistema).
Mejoras y correcciones respecto al original:

- `mis-trabajos.html` y `contacto.html` tenían HTML roto (etiquetas sin cerrar, tarjeta vacía) → rehechos y validados
- Email inconsistente (`mailto:` vs texto visible) → unificado en `site.ts`
- Menú móvil inexistente (enlaces se desbordaban) → hamburguesa funcional con accesibilidad (ARIA, Escape, clic fuera)
- Preloader de 2.5 s → 1 s máximo, respeta `prefers-reduced-motion`
- Sin SEO (meta/OG/sitemap/JSON-LD/favicon) → añadido
- Filtro de portafolio y formulario sin feedback → reparados, con estados accesibles (`aria-live`)
- Diseño renovado completo manteniendo la identidad negro + dorado
