// Bases
import path from 'node:path';
import { glob } from 'glob';

// Plugins
import { loadEnv } from '@laboratory/common/env-loader';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import html from '@rollup/plugin-html';
import ejs from 'ejs';
import serve from 'rollup-plugin-serve';
import terser from '@rollup/plugin-terser';
import { minify as htmlMinifier } from 'html-minifier-terser';
import { rimraf } from 'rimraf';
import copy from 'rollup-plugin-copy';

// check if the mode is development
const isDevelopment = process.env.mode === 'development';
// the output dir
const outputDir = 'dist';
// load environment variables
const env = loadEnv(process.env.mode, process.cwd());

export default {
  input: ['src/laboratory-root.ts'],
  output: [
    {
      format: 'es',
      entryFileNames: '[name].js',
      assetFileNames: '[name][extname]',
      dir: outputDir
    }
  ],
  preserveEntrySignatures: 'allow-extension',
  watch: {
    buildDelay: 1000,
    clearScreen: false,
    include: 'src/**',
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

    // replaces targeted strings in files while bundling.
    replace({
      preventAssignment: true,
      __PUBLIC_PATH: JSON.stringify(env.PUBLIC_PATH)
    }),

    // generate html file.
    html({
      title: 'Laboratory Root',
      publicPath: env.PUBLIC_PATH,
      // The template args details see here: https://www.npmjs.com/package/@rollup/plugin-html#template
      template: async ({ attributes, files, publicPath, title }) => {
        const html = await ejs.renderFile('./src/template.ejs', {
          isLocal: isDevelopment,
          files: files.js,
          attributes,
          publicPath,
          title
        });
        if (isDevelopment) {
          return html;
        } else {
          const minifiedHtml = await htmlMinifier(html, {
            collapseWhitespace: true,
            processScripts: ['importmap'],
            removeComments: true,
            minifyJS: true
          });
          return minifiedHtml;
        }
      }
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
          historyApiFallback: '/index.html',
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
            console.log(`Open with ${protocol}://${host}:${address.port}/laboratory-root.js`);
          }
        })
      : null,

    isDevelopment ? watcher(['src/**/*.ejs']) : null
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

/**
 * add extra files to watch
 */
function watcher(globs) {
  return {
    buildStart() {
      for (const item of globs) {
        glob.sync(item).forEach(filename => {
          this.addWatchFile(path.resolve(filename));
        });
      }
    }
  };
}
