import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // <— NEU

export default defineConfig({
  // falls GitHub Pages: base: '/BNATUREPAGE/',  // Repo-Namen anpassen
  plugins: [react(), tailwindcss()],          // <— NEU
})