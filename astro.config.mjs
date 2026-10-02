import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH lets the same project build for a sub-folder preview (e.g. GitHub Pages: /imeflock.com/).
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://limeflock.com',
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
