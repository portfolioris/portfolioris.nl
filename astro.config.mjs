import { defineConfig } from 'astro/config';
import { svelte as sveltePlugin } from '@sveltejs/vite-plugin-svelte';
import { remarkImage } from './src/utils/remark-image';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import sveltePreprocess from "svelte-preprocess";
// import Figure from "./src/components/molecules/Figure.svelte";

// https://astro.build/config
export default defineConfig({
  publicDir: './static',
  integrations: [svelte({
    preprocess: sveltePreprocess(),
  })],
  site: 'https://www.portfolioris.nl',
  markdown: {
    shikiConfig: {
      wrap: true,
    },
    rehypePlugins: [
      remarkImage,
    ],
  },
  // vite: {
  //   plugins: [
  //     sveltePlugin({
  //       preprocess: sveltePreprocess(),
  //     }),
  //   ]
  // }
});
