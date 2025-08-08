import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@app": "/src/app",
      "@widget": "/src/widget",
      "@assets": "/src/assets",
      "@store": "/src/store",
      "@shared": "/src/shared",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@app/styles/forward.scss" as *;`,
      },
    },
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [],
    },
    rollupOptions: {
      output: {
        format: "es",
      },
    },
  },
  optimizeDeps: {
    // include: ["kaboom"],
  },
});
