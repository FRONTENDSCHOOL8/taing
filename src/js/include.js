import header from '/src/js/header';
import footer from '/src/js/footer';
import searchPage from '/src/pages/searchPage/searchPage';
import userMenuModal from '/src/pages/modal/userMenuModal/userMenuModal';
import mainPageModal from '/src/pages/modal/mainPageModal/mainPageModal';
import logoutModal from '/src/pages/modal/logoutModal/logoutModal';
import withdrawalModal from '/src/pages/modal/withdrawalModal/withdrawalModal';

const authData = JSON.parse(localStorage.getItem('auth'));
const path = location.pathname;

if (
  path === '/src/pages/mainpage/' ||
  path === '/src/pages/selectprofile/' ||
  path === '/src/pages/editprofile/'
) {
  if (!authData || !authData.isAuth) {
    alert('로그인 후 이용해주세요.');
    location.href = '/src/pages/login/';
  }
}

// header.html 파일을 가져와서 header 요소에 삽입
await fetch('/src/components/header.html')
  .then((response) => response.text())
  .then((html) => {
    const headerElement = document.querySelector('#header');
    headerElement.innerHTML = html;

    header();
  })
  .catch((error) => {
    console.error(error);
  });

// footer.html 파일을 가져와서 footer 요소에 삽입
await fetch('/src/components/footer.html')
  .then((response) => response.text())
  .then((html) => {
    const footerElement = document.querySelector('#footer');
    footerElement.innerHTML = html;

    footer();
  })
  .catch((error) => {
    console.error(error);
  });

// 메인 페이지에서만 실행
if (window.location.pathname === '/src/pages/mainpage/') {
  fetch('/src/pages/modal/userMenuModal/')
    .then((response) => response.text())
    .then((html) => {
      const menuElement = document.querySelector('#user-menu');
      menuElement.innerHTML = html;

      userMenuModal();
    })
    .catch((error) => {
      console.error(error);
    });

  fetch('/src/pages/searchPage/')
    .then((response) => response.text())
    .then((html) => {
      const searchElement = document.querySelector('#search');
      searchElement.innerHTML = html;

      searchPage();
    })
    .catch((error) => {
      console.error(error);
    });

  // mainPage modal
  fetch('/src/pages/modal/mainPageModal/')
    .then((response) => response.text())
    .then((html) => {
      const modalElement = document.querySelector('#mainPageModal');
      modalElement.innerHTML = html;

      mainPageModal();
    })
    .catch((error) => {
      console.error(error);
    });

  // logout modal
  fetch('/src/pages/modal/logoutModal/')
    .then((response) => response.text())
    .then((html) => {
      const modalElement = document.querySelector('#logoutModal');
      modalElement.innerHTML = html;

      logoutModal();
    })
    .catch((error) => {
      console.error(error);
    });

  // withdrawal modal
  fetch('/src/pages/modal/withdrawalModal/')
    .then((response) => response.text())
    .then((html) => {
      const modalElement = document.querySelector('#withdrawalModal');
      modalElement.innerHTML = html;

      withdrawalModal();
    })
    .catch((error) => {
      console.error(error);
    });
}
