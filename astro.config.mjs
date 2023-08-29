import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import sveltePreprocess from "svelte-preprocess";
import remarkImage from './src/utils/remark-image';

export default defineConfig({
  publicDir: './static',
  integrations: [svelte({
    preprocess: sveltePreprocess(),
  })],
  site: 'https://www.portfolioris.nl',
  markdown: {
    syntaxHighlight: 'prism',
    // shikiConfig: {
    //   wrap: true,
    // },
    // rehypePlugins: [
    //   remarkImage,
    // ],
  },
  experimental: {
    assets: true,
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    // domains: ['res.cloudinary.com']
  },
  vite: {
    css: {
      devSourcemap: true,
    }
  }
});
