// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cleanout2closing.com',
  output: 'static',
  integrations: [
    sitemap({
      // Filter out noindex pages if any
      filter: (page) => !page.includes('/admin/'),
    }),
  ],
});
