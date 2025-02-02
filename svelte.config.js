import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import remarkCustomHeaderId from "remark-custom-header-id";
import * as svelte from "svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    sveltePreprocess({
      preserve: ["ld+json"],
      scss: {
        api: "modern-compiler", // or "modern"
      },
    }),
    mdsvex({
      extensions: [".md"],
      remarkPlugins: [remarkCustomHeaderId],
    }),
  ],
  kit: {
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    csp: {
      directives: {
        "default-src": ["'self'", "matomo.portfolioris.nl"],
        "script-src": ["'strict-dynamic'"],
      },
    },
  },
};

export default config;
