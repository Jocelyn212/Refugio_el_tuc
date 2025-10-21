// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Habilitamos SSR con el adaptador de Vercel
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});