// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/WorkSpace/laboratory/vue/node_modules/vite/dist/node/index.js";
import path from "node:path";
import vue from "file:///D:/WorkSpace/laboratory/vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import eslint from "file:///D:/WorkSpace/laboratory/vue/node_modules/vite-plugin-eslint/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\WorkSpace\\laboratory\\vue";
var vite_config_default = defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const outputDir = "dist";
  const port = Number(env.VITE_PORT);
  const host = env.VITE_DEPLOY_ORIGIN.replace(/^https?:\/\/|:\d{4,6}$/g, "");
  const origin = `${env.VITE_DEPLOY_ORIGIN}${env.VITE_PUBLIC_PATH}`;
  const isWindows = typeof process !== "undefined" && process.platform === "win32";
  const customTagElementList = ["page-anchor"];
  return {
    define: {
      __dirname: isWindows && command === "serve" ? JSON.stringify(path.posix.normalize(__vite_injected_original_dirname.split(path.sep).join(path.posix.sep))) : '""'
    },
    build: {
      outDir: outputDir,
      manifest: true,
      rollupOptions: {
        input: "src/laboratory-vue.ts",
        output: {
          entryFileNames: "[name].js",
          // assetFileNames: '[name].[ext]'
          chunkFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        },
        preserveEntrySignatures: "strict"
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
            isCustomElement: (tag) => customTagElementList.includes(tag)
          }
        }
      }),
      eslint({
        include: ["src/**/*.ts", "src/**/*.vue"],
        lintOnStart: true,
        failOnError: false
      })
    ],
    experimental: {
      // More detail see here: https://cn.vitejs.dev/guide/build.html#advanced-base-options
      renderBuiltUrl(filename) {
        return `${origin}/${filename}`;
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrU3BhY2VcXFxcbGFib3JhdG9yeVxcXFx2dWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFdvcmtTcGFjZVxcXFxsYWJvcmF0b3J5XFxcXHZ1ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovV29ya1NwYWNlL2xhYm9yYXRvcnkvdnVlL3ZpdGUuY29uZmlnLnRzXCI7Ly8gQmFzZXNcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcblxuLy8gVHlwZXNcbmltcG9ydCB0eXBlIHsgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbi8vIFBsdWdpbnNcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbi8vIEB0cy1leHBlY3QtZXJyb3IgcGx1Z2luIGlzc3VlXG5pbXBvcnQgZXNsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlLCBjb21tYW5kIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICAvLyBsb2FkIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICBjb25zdCBlbnY6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksIFwiXCIpO1xuICAvLyB0aGUgb3V0cHV0IGRpclxuICBjb25zdCBvdXRwdXREaXI6IHN0cmluZyA9ICdkaXN0JztcbiAgLy8gZGV2IHNlcnZlciBwb3J0XG4gIGNvbnN0IHBvcnQ6IG51bWJlciA9IE51bWJlcihlbnYuVklURV9QT1JUKTtcbiAgLy8gZGV2IHNlcnZlciBob3N0XG4gIGNvbnN0IGhvc3Q6IHN0cmluZyA9IGVudi5WSVRFX0RFUExPWV9PUklHSU4ucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC98OlxcZHs0LDZ9JC9nLCBcIlwiKTtcbiAgLy8gc3RhdGljIHJlc291cmNlIHVybCBvcmlnaW5cbiAgY29uc3Qgb3JpZ2luOiBzdHJpbmcgPSBgJHtlbnYuVklURV9ERVBMT1lfT1JJR0lOfSR7ZW52LlZJVEVfUFVCTElDX1BBVEh9YDtcbiAgLy8gY2hlY2sgaWYgdGhlIE9TIGlzIHdpbmRvd3NcbiAgY29uc3QgaXNXaW5kb3dzOiBib29sZWFuID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMic7XG4gIC8vIGN1c3RvbSB0YWcgZWxlbWVudCBsaXN0XG4gIGNvbnN0IGN1c3RvbVRhZ0VsZW1lbnRMaXN0OiBzdHJpbmdbXSA9IFsncGFnZS1hbmNob3InXTtcblxuICByZXR1cm4ge1xuICAgIGRlZmluZToge1xuICAgICAgX19kaXJuYW1lOiBpc1dpbmRvd3MgJiYgY29tbWFuZCA9PT0gJ3NlcnZlJyA/IEpTT04uc3RyaW5naWZ5KHBhdGgucG9zaXgubm9ybWFsaXplKF9fZGlybmFtZS5zcGxpdChwYXRoLnNlcCkuam9pbihwYXRoLnBvc2l4LnNlcCkpKSA6ICdcIlwiJ1xuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogb3V0cHV0RGlyLFxuICAgICAgbWFuaWZlc3Q6IHRydWUsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGlucHV0OiAnc3JjL2xhYm9yYXRvcnktdnVlLnRzJyxcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgICAgIC8vIGFzc2V0RmlsZU5hbWVzOiAnW25hbWVdLltleHRdJ1xuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnc3RhdGljL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nXG4gICAgICAgIH0sXG4gICAgICAgIHByZXNlcnZlRW50cnlTaWduYXR1cmVzOiAnc3RyaWN0JyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgcG9ydCxcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgaG9zdCxcbiAgICAgIC8vIERlZmluZXMgdGhlIG9yaWdpbiBvZiB0aGUgZ2VuZXJhdGVkIGFzc2V0IFVSTHMgZHVyaW5nIGRldmVsb3BtZW50LlxuICAgICAgb3JpZ2luOiBlbnYuVklURV9ERVBMT1lfT1JJR0lOLFxuICAgICAgaG1yOiB7XG4gICAgICAgIG92ZXJsYXk6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoe1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiBjdXN0b21UYWdFbGVtZW50TGlzdC5pbmNsdWRlcyh0YWcpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBlc2xpbnQoe1xuICAgICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnRzJywgJ3NyYy8qKi8qLnZ1ZSddLFxuICAgICAgICBsaW50T25TdGFydDogdHJ1ZSxcbiAgICAgICAgZmFpbE9uRXJyb3I6IGZhbHNlXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGV4cGVyaW1lbnRhbDoge1xuICAgICAgLy8gTW9yZSBkZXRhaWwgc2VlIGhlcmU6IGh0dHBzOi8vY24udml0ZWpzLmRldi9ndWlkZS9idWlsZC5odG1sI2FkdmFuY2VkLWJhc2Utb3B0aW9uc1xuICAgICAgcmVuZGVyQnVpbHRVcmwoZmlsZW5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYCR7b3JpZ2lufS8ke2ZpbGVuYW1lfWA7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFVBQVU7QUFNakIsT0FBTyxTQUFTO0FBRWhCLE9BQU8sWUFBWTtBQVZuQixJQUFNLG1DQUFtQztBQVl6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLE1BQU0sUUFBUSxNQUE2QjtBQUV4RSxRQUFNLE1BQThCLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBRW5FLFFBQU0sWUFBb0I7QUFFMUIsUUFBTSxPQUFlLE9BQU8sSUFBSSxTQUFTO0FBRXpDLFFBQU0sT0FBZSxJQUFJLG1CQUFtQixRQUFRLDJCQUEyQixFQUFFO0FBRWpGLFFBQU0sU0FBaUIsR0FBRyxJQUFJLGtCQUFrQixHQUFHLElBQUksZ0JBQWdCO0FBRXZFLFFBQU0sWUFBcUIsT0FBTyxZQUFZLGVBQWUsUUFBUSxhQUFhO0FBRWxGLFFBQU0sdUJBQWlDLENBQUMsYUFBYTtBQUVyRCxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixXQUFXLGFBQWEsWUFBWSxVQUFVLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxpQ0FBVSxNQUFNLEtBQUssR0FBRyxFQUFFLEtBQUssS0FBSyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUk7QUFBQSxJQUN2STtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsZUFBZTtBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFVBQ04sZ0JBQWdCO0FBQUE7QUFBQSxVQUVoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLFFBQ0EseUJBQXlCO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0EsTUFBTTtBQUFBLE1BQ047QUFBQTtBQUFBLE1BRUEsUUFBUSxJQUFJO0FBQUEsTUFDWixLQUFLO0FBQUEsUUFDSCxTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxRQUNGLFVBQVU7QUFBQSxVQUNSLGlCQUFpQjtBQUFBLFlBQ2YsaUJBQWlCLENBQUMsUUFBUSxxQkFBcUIsU0FBUyxHQUFHO0FBQUEsVUFDN0Q7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxPQUFPO0FBQUEsUUFDTCxTQUFTLENBQUMsZUFBZSxjQUFjO0FBQUEsUUFDdkMsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLE1BQ2YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLGNBQWM7QUFBQTtBQUFBLE1BRVosZUFBZSxVQUFrQjtBQUMvQixlQUFPLEdBQUcsTUFBTSxJQUFJLFFBQVE7QUFBQSxNQUM5QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
