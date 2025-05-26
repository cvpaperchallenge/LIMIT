import path from "path"
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'

const isProd = process.env.NODE_ENV === 'production';

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Use "/LIMIT/" when building for GitHub Pages, "/" during dev
  base: isProd ? '/LIMIT/' : '/',
})
