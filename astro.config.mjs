import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pgrantas-debug.github.io',
  base: '/duke-astro',
  integrations: [tailwind({ applyBaseStyles: false })],
});
