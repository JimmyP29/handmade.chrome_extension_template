import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        background: "src/background/index.ts",
        content: "src/content/index.ts",
        side_panel: "index.html",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist",
  },
  plugins: [react()],
});
