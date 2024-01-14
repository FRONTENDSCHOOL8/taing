import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'docs',
    rollupOptions: {
      input: {
        header: resolve(__dirname, 'src/components/header.html'),
        footer: resolve(__dirname, 'src/components/footer.html'),
        mainPage: resolve(__dirname, 'src/pages/mainPage/'),
        landingPage: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login/'),
        selectProfile: resolve(__dirname, 'src/pages/selectProfile/'),
        editProfile: resolve(__dirname, 'src/pages/editProfile/'),
        findId: resolve(__dirname, 'src/pages/findId/'),
        findPassword: resolve(__dirname, 'src/pages/findPassword/'),
        searchPage: resolve(__dirname, 'src/pages/searchPage/'),
        deleteModal: resolve(__dirname, 'src/components/deleteModal/'),
        logoutModal: resolve(__dirname, 'src/pages/modal/logoutModal/'),
        mainPageModal: resolve(__dirname, 'src/pages/modal/mainPageModal/'),
      },
    },
  },
});
