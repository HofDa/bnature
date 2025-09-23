import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // <— NEU

export default defineConfig({
  base: './https://github.com/HofDa/bnature/',  // Repo-Namen anpassen
  plugins: [react(), tailwindcss()],          // <— NEU
})