import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
// import pkg from './package.json';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    preserve: ['ld+json'],
  }),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: adapter(),
    // prerender: {
    //   default: true,
    // },

    // hydrate the <div id="svelte"> element in src/app.html
    // target: '#app',

    /*vite: {
      css: {
        postcss: {
          plugins: [
            {
              postcssPlugin: 'internal:charset-removal',
              AtRule: {
                charset: (atRule) => {
                  if (atRule.name === 'charset') {
                    atRule.remove();
                  }
                },
              },
            },
          ],
        },
      },
      //   ssr: {
      //     noExternal: Object.keys(pkg.dependencies || {}),
      //   },
    },
    browser: {
      router: false,
    },*/
  },
};

export default config;
