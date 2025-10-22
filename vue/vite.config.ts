// Bases
import { defineConfig, loadEnv } from 'vite';
import path from 'node:path';

// Types
import type { ConfigEnv, UserConfig } from 'vite';

// Plugins
import vue from '@vitejs/plugin-vue';
import replace from '@rollup/plugin-replace';
// @ts-expect-error plugin issue
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  // load environment variables
  const env: Record<string, string> = loadEnv(mode, process.cwd(), "");
  // the output dir
  const outputDir: string = 'dist';
  // dev server port
  const port: number = Number(env.VITE_PORT);
  // dev server host
  const host: string = env.VITE_DEPLOY_ORIGIN.replace(/^https?:\/\/|:\d{4,6}$/g, "");
  // static resource url origin
  const origin: string = `${env.VITE_DEPLOY_ORIGIN}${env.VITE_PUBLIC_PATH}`;
  // check if the OS is windows
  const isWindows: boolean = typeof process !== 'undefined' && process.platform === 'win32';
  // custom tag element list
  const customTagElementList: string[] = ['page-anchor'];

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    build: {
      outDir: outputDir,
      manifest: true,
      rollupOptions: {
        input: 'src/laboratory-vue.ts',
        output: {
          entryFileNames: '[name].js',
          // assetFileNames: '[name].[ext]'
          chunkFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        },
        preserveEntrySignatures: 'strict',
      }
    },
    server: {
      port,
      open: false,
      host,
      // Defines the origin of the generated asset URLs during development.
      origin: env.VITE_DEPLOY_ORIGIN,
      hmr: {
        overlay: false
      }
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => customTagElementList.includes(tag),
          }
        }
      }),

      // replaces targeted strings in files while bundling.
      replace({
        preventAssignment: true,
        __dirname: isWindows && command === 'serve' ? JSON.stringify(path.posix.normalize(__dirname.split(path.sep).join(path.posix.sep))) : '""',
      }),

      eslint({
        include: ['src/**/*.ts', 'src/**/*.vue'],
        lintOnStart: true,
        failOnError: false
      }),
    ],
    experimental: {
      // More detail see here: https://cn.vitejs.dev/guide/build.html#advanced-base-options
      renderBuiltUrl(filename: string) {
        return `${origin}/${filename}`;
      }
    }
  }
});
