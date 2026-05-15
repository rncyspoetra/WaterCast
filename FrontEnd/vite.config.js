import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Watercast App",
        short_name: "App",
        description:
          "Aplikasi penjualan air minum galon isi ulang untuk membantu pengelolaan transaksi, data pelanggan, dan monitoring penjualan secara mudah dan efisien.",
        background_color: "#ffffff",
        display: "standalone",
        screenshots: [
          {
            src: "/screenshots/desktop/Watercast_001.png",
            sizes: "1920x1043",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/desktop/Watercast_002.png",
            sizes: "1920x1043",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/desktop/Watercast_003.png",
            sizes: "1920x1043",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/desktop/Watercast_004.png",
            sizes: "1920x1043",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/mobile/Watercast_001.png",
            sizes: "390x844",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/mobile/Watercast_002.png",
            sizes: "390x844",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/mobile/Watercast_003.png",
            sizes: "390x844",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/mobile/Watercast_004.png",
            sizes: "390x844",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/mobile/Watercast_005.png",
            sizes: "390x844",
            type: "image/png",
            form_factor: "narrow",
          },
        ],
        icons: [
          {
            src: "/icon-x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/maskable_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
