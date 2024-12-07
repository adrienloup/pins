import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: "pins",
        name: "The Pins Game",
        icons: [
          {
            src: "/pins/pins-192x192.svg",
            type: "image/svg+xml",
            sizes: "192x192",
          },
          {
            src: "/pins/pins-256x256.svg",
            type: "image/svg+xml",
            sizes: "256x256",
          },
          {
            src: "/pins/pins-384x384.svg",
            type: "image/svg+xml",
            sizes: "384x384",
          },
          {
            src: "/pins/pins-512x512.svg",
            type: "image/svg+xml",
            sizes: "512x512",
          },
        ],
        start_url: "/pins/",
        background_color: "#1d1d1f",
        display: "standalone",
        theme_color: "#f5f5f7",
        description:
          "The Pin Game is an Incremental game made by an Incremental addict for Incremental lovers.",
      },
    }),
  ],
  base: "/pins",
});
