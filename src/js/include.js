import header from '/src/js/header';
import footer from '/src/js/footer';
import searchPage from '/src/pages/searchPage/searchPage.js';

// header.html 파일을 가져와서 header 요소에 삽입
fetch('/src/components/header.html')
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
fetch('/src/components/footer.html')
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
if (window.location.pathname === '/src/pages/mainPage/index.html') {
  // footer.html 파일을 가져와서 footer 요소에 삽입
  fetch('/src/pages/searchPage/index.html')
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
