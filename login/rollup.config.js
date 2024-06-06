// Plugins
import { loadEnv } from '@laboratory/common/env-loader';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import terser from '@rollup/plugin-terser';
import { rimraf } from 'rimraf';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

// check if the mode is development
const isDevelopment = process.env.mode === 'development';
// the output dir
const outputDir = 'dist';
// load environment variables
const env = loadEnv(process.env.mode, process.cwd());

export default {
  input: 'src/laboratory-login.ts',
  output: {
    format: 'es',
    entryFileNames: '[name].js',
    assetFileNames: '[name][extname]',
    dir: outputDir
  },
  preserveEntrySignatures: 'allow-extension',
  watch: {
    buildDelay: 1000,
    clearScreen: false,
    include: 'src/**/*.{js,ts,css}',
    exclude: 'node_modules/**'
  },
  plugins: [
    // transpile typescript
    typescript({
      compilerOptions: {
        outDir: outputDir
      }
    }),

    // resolve node_modules
    nodeResolve(),

    // transpile to es5
    babel({ babelHelpers: 'bundled' }),

    // css
    postcss({ extract: true }),

    // replaces targeted strings in files while bundling.
    replace({
      preventAssignment: true,
      __PUBLIC_PATH: JSON.stringify(env.PUBLIC_PATH),
      __DEPLOY_ORIGIN: JSON.stringify(env.DEPLOY_ORIGIN)
    }),

    // minified bundle without html.
    isDevelopment ? null : terser(),

    // clear output directory.
    clear(outputDir),

    // copy public directory to output directory.
    copy({
      targets: [{ src: 'public/*', dest: outputDir }]
    }),

    // start dev server.
    isDevelopment
      ? serve({
          port: Number(env.PORT),
          // Multiple folders to serve from
          contentBase: [outputDir],
          // set headers
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          // execute function after server has begun listening
          onListening: function (server) {
            const address = server.address();
            const host = address.address === '::' ? 'localhost' : address.address;
            // by using a bound function, we can access options as `this`
            const protocol = this.https ? 'https' : 'http';
            console.log(`Server listening at ${protocol}://${host}:${address.port}/`);
            console.log(`Open with ${protocol}://${host}:${address.port}/laboratory-login.js`);
          }
        })
      : null
  ]
};

/**
 * clear output directory
 * @param {string|string[]} paths
 */
function clear(paths = 'dist') {
  return {
    name: 'clear',
    buildStart() {
      rimraf(paths);
    }
  };
}
