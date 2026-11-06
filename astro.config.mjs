import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Si despliegas en Vercel/Netlify o un dominio propio, cambia `site` por tu dominio final.
export default defineConfig({
  site: 'https://duamarketing.com',
  integrations: [sitemap()],
  prefetch: true,
});
