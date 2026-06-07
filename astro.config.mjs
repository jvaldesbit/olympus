// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jvaldesbit.github.io',
  base: '/olympus',
  vite: {
    plugins: [tailwindcss()]
  }
});
