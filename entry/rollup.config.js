// Bases
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Plugins
import { loadEnv } from '@laboratory/common/env-loader';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import terser from '@rollup/plugin-terser';
import { rimraf } from 'rimraf';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import { string } from 'rollup-plugin-string';

// Get current file path and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Check if in development mode
const isDevelopment = process.env.mode === 'development';
// Output directory
const outputDir = 'dist';
// Load environment variables
const env = loadEnv(process.env.mode, process.cwd());

export default {
  // Entry file
  input: 'src/laboratory-entry.ts',
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
    // Path alias configuration
    alias({
      entries: [
        { find: '@', replacement: resolve(__dirname, 'src') }
      ]
    }),

    // TypeScript compilation
    typescript({
      compilerOptions: {
        outDir: outputDir
      }
    }),

    // Resolve node_modules modules
    nodeResolve(),

    // Transpile to ES5
    babel({ babelHelpers: 'bundled' }),

    // CSS processing
    postcss({ extract: true }),

    // SVG to string conversion
    string({
      include: '**/*.svg'
    }),

    // Replace target strings in files during bundling
    replace({
      preventAssignment: true,
      __PUBLIC_PATH: JSON.stringify(env.PUBLIC_PATH),
      __DEPLOY_ORIGIN: JSON.stringify(env.DEPLOY_ORIGIN)
    }),

    // Production code minification
    isDevelopment ? null : terser(),

    // Clean output directory
    clear(outputDir),

    // Copy public directory to output directory
    copy({
      targets: [{ src: 'public/*', dest: outputDir }]
    }),

    // Development server
    isDevelopment
      ? serve({
          port: Number(env.PORT),
          contentBase: [outputDir],
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          onListening: function (server) {
            const address = server.address();
            const host = address.address === '::' ? 'localhost' : address.address;
            const protocol = this.https ? 'https' : 'http';
            console.log(`Server running at ${protocol}://${host}:${address.port}/`);
            console.log(`Open ${protocol}://${host}:${address.port}/laboratory-entry.js`);
          }
        })
      : null
  ]
};

/**
 * Clean output directory
 * @param {string|string[]} paths Paths to clean
 */
function clear(paths = 'dist') {
  return {
    name: 'clear',
    buildStart() {
      rimraf(paths);
    }
  };
}
