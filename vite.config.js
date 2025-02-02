import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
// import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit() /*, VitePluginSvgSpritemap('./src/lib/atoms/Icon/icons/!*.svg')*/,
  ],
});
