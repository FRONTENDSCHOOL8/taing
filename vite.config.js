import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'docs',
    rollupOptions: {
      input: {
        welcome: resolve(__dirname, 'index.html'),
        landingPage: resolve(__dirname, 'src/pages/landingPage/index.html'),
        mainPage: resolve(__dirname, 'src/pages/mainPage/index.html'),
        header: resolve(__dirname, 'src/components/header.html'),
        footer: resolve(__dirname, 'src/components/footer.html'),
      },
    },
  },
});
