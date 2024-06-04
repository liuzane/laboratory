// Bases
import { glob } from 'glob';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Plugins

import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { rimraf } from 'rimraf';
import copy from 'rollup-plugin-copy';
// import serve from 'rollup-plugin-serve';

// check if the mode is development
const isDevelopment = process.env.mode === 'development';
// the output dir
const outputDir = 'dist';
// global variables
const PUBLIC_PATH = isDevelopment ? '/' : '/laboratory/';
// entry files
const inputs = Object.fromEntries(
  glob
    .sync('src/**/*.{ts,css}')
    .map(file => [
      path.relative('src', file.slice(0, file.length - path.extname(file).length)),
      fileURLToPath(new URL(file, import.meta.url))
    ])
);

export default {
  input: inputs,
  output: [
    {
      format: 'es',
      entryFileNames: 'esm/[name].mjs',
      dir: outputDir
    },
    {
      format: 'cjs',
      entryFileNames: 'cjs/[name].cjs',
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
        outDir: `${outputDir}/types`
      }
    }),

    // converts .json files to ES6 modules
    json(),

    // convert CommonJS modules to ES6
    commonjs({ extensions: ['.js'] }),

    // resolve node_modules
    nodeResolve(),

    // transpile to es5
    babel({ babelHelpers: 'bundled' }),

    // replaces targeted strings in files while bundling.
    replace({
      preventAssignment: true,
      __PUBLIC_PATH: JSON.stringify(PUBLIC_PATH)
    }),

    // minified bundle without html.
    isDevelopment ? null : terser(),

    // clear output directory.
    clear(outputDir),

    // copy public directory to output directory.
    copy({
      targets: [{ src: 'public/*', dest: outputDir }]
    }),

    // write output package.json.
    writePackage(outputDir)
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
 * write output package.json
 * @param {string|string[]} paths
 */
function writePackage(outputDir) {
  return {
    name: 'write-package',
    closeBundle() {
      try {
        const packageString = fs.readFileSync('./package.json', 'utf8');
        const packageJson = JSON.parse(packageString);
        delete packageJson.type;
        delete packageJson.scripts;
        delete packageJson.devDependencies;
        fs.writeFileSync(
          path.join(path.resolve(), `${outputDir}/package.json`),
          JSON.stringify(packageJson, null, 2),
          'utf8'
        );
      } catch (error) {
        console.error('write-package plugin: ', error);
      }
    }
  };
}
