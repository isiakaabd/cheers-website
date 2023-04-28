import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteAliases(), VitePWA({ registerType: "autoUpdate" })],
  server: {
    port: 4100,
  },
});
