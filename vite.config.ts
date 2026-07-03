// 基础模块
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env: Record<string, string> = loadEnv(mode, process.cwd(), '');
  return {
    base: env.VITE_BASE,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: Number(env.VITE_PORT),
      open: true,
    },
    build: {
      target: 'esnext',
      emptyOutDir: true,
      outDir: 'dist',
    },
    plugins: [],
  };
});
