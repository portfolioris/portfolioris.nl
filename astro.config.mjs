import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import sveltePreprocess from "svelte-preprocess";

// https://astro.build/config
export default defineConfig({
  publicDir: './static',
  integrations: [svelte({
    preprocess: sveltePreprocess(),
  })],
  site: 'https://www.portfolioris.nl',
});
