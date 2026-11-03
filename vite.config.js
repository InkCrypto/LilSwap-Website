import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { statSync } from 'node:fs'

const iconVersion = () => ({
  name: 'icon-version',
  transformIndexHtml: (html) => html
    .replaceAll('%ICON_V%', Math.floor(statSync('public/favicon.svg').mtimeMs / 1000))
    .replaceAll('%OG_V%', Math.floor(statSync('public/og-image.webp').mtimeMs / 1000)),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    iconVersion(),
  ],
})
