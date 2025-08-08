import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
  },
  optimizeDeps: {
    exclude: ["kaboom"],
  },
});
