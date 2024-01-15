import header from '/src/js/header';
import footer from '/src/js/footer';
import searchPage from '/src/pages/searchPage/searchPage.js';
import userMenuModal from '/src/pages/modal/userMenuModal/userMenuModal';

const authData = JSON.parse(localStorage.getItem('auth'));
const path = location.pathname;

if (
  path === '/src/pages/mainPage/' ||
  path === '/src/pages/selectProfile/' ||
  path === '/src/pages/editProfile/'
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

// footer.html 파일을 가져와서 footer 요소에 삽입
fetch('/src/pages/modal/userMenuModal/index.html')
  .then((response) => response.text())
  .then((html) => {
    const menuElement = document.querySelector('#user-menu');
    menuElement.innerHTML = html;

    userMenuModal();
  })
  .catch((error) => {
    console.error(error);
  });

// 메인 페이지에서만 실행
if (window.location.pathname === '/src/pages/mainPage/') {
  // footer.html 파일을 가져와서 footer 요소에 삽입
  await fetch('/src/pages/searchPage/index.html')
    .then((response) => response.text())
    .then((html) => {
      const searchElement = document.querySelector('#search');
      searchElement.innerHTML = html;

      searchPage();
    })
    .catch((error) => {
      console.error(error);
    });
}
