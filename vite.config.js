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
        landingPage: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
        regist: resolve(__dirname, 'src/pages/regist/index.html'),
        mainPage: resolve(__dirname, 'src/pages/mainPage/index.html'),
        detailPage: resolve(__dirname, 'src/pages/detailPage/index.html'),
        selectProfile: resolve(__dirname, 'src/pages/selectProfile/index.html'),
        editProfile: resolve(__dirname, 'src/pages/editProfile/index.html'),
        findId: resolve(__dirname, 'src/pages/findId/index.html'),
        findPassword: resolve(__dirname, 'src/pages/findPassword/index.html'),
        searchPage: resolve(__dirname, 'src/pages/searchPage/index.html'),
        logoutModal: resolve(
          __dirname,
          'src/pages/modal/logoutModal/index.html'
        ),
        mainPageModal: resolve(
          __dirname,
          'src/pages/modal/mainPageModal/index.html'
        ),
      },
    },
  },
});
