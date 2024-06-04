// Plugins
const { loadEnv } = require('@laboratory/common/env-loader');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const replace = require('@rollup/plugin-replace');
const serve = require('rollup-plugin-serve');
const terser = require('@rollup/plugin-terser');
const { rimraf } = require('rimraf');
const copy = require('rollup-plugin-copy');
const postcss = require('rollup-plugin-postcss');

// check if the mode is development
const isDevelopment = process.env.mode === 'development';
// the output dir
const outputDir = 'dist';
// load environment variables
const env = loadEnv(process.env.mode, process.cwd());

module.exports = {
  input: 'src/laboratory-solar-system.js',
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
    include: 'src/**/*.{js,css}',
    exclude: 'node_modules/**'
  },
  plugins: [
    // resolve node_modules
    nodeResolve(),

    // transpile to es5
    babel({ babelHelpers: 'bundled' }),

    // replaces targeted strings in files while bundling.
    replace({
      preventAssignment: true,
      __PUBLIC_PATH: JSON.stringify(env.PUBLIC_PATH),
      __DEPLOY_ORIGIN: JSON.stringify(env.DEPLOY_ORIGIN)
    }),

    // css
    postcss({ extract: true }),

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
            console.log(`Open with ${protocol}://${host}:${address.port}/laboratory-solar-system.js`);
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
