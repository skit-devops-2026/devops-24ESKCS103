import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'frontend/pages/home.html'),
        bucketList: resolve(__dirname, 'frontend/pages/bucketList.html'),
        wof: resolve(__dirname, 'frontend/pages/wof.html')
      }
    }
  }
});
