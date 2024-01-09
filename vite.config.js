import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'docs',
    rollupOptions: {
      input: {
        landingPage: resolve(__dirname, 'index.html'),
        mainPage: resolve(__dirname, 'src/pages/mainPage/index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
        selectProfile: resolve(__dirname, 'src/pages/selectProfile/index.html'),
        editProfile: resolve(__dirname, 'src/pages/editProfile/index.html'),
        header: resolve(__dirname, 'src/components/header.html'),
        footer: resolve(__dirname, 'src/components/footer.html'),
      },
    },
  },
});
