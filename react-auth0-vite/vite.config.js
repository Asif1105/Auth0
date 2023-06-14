import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      AUTH0_DOMAIN: "asif-buhari1105.us.auth0.com",
      AUTH0_CLIENT_ID: "GL7kE6ZLMPEPRfwYoqOqgZadIzNBArrd",
    },
  },
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
  server: {
    host: true,
    port: 4000,
    open: true,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    host: "localhost",
    port: 4001,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
