import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://stageapi.monkcommerce.app", // The API endpoint you're trying to access
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Adjust this to match your API path
      },
    },
  },
});
