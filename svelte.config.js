import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import path from 'path'

const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      resolve: {
        alias: {
          components: path.resolve('./src/components'),
          layouts: path.resolve('./src/layouts'),
          pages: path.resolve('./src/pages'),
          modules: path.resolve('./src/modules'),
          lib: path.resolve('./src/lib'),
          constants: path.resolve('./src/constants')
        }
      }
    },

    paths: {
      base: dev ? '' : '/text-comparator'
    },
    appDir: 'internal'
  }
}

export default config
