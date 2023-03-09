import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  // base:"/",
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   },
  // },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js, jsx, html, css, jpg,jpeg,png, svg, ico}"],
        // cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: true,
      },
      injectRegister: "auto",
    }),
  ],
});
