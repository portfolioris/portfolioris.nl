import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  publicDir: './static',
  integrations: [svelte()],
  site: 'https://www.portfolioris.nl',
});
