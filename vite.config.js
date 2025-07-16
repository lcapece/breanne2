import { defineConfig } from "vite"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        spa: "spa-website.html"
      }
    }
  },
  publicDir: "public"
})
