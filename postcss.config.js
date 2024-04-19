// postcss.config.js
import { defineConfig } from 'vite'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
});