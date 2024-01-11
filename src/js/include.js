import header from '/src/js/header';
import footer from '/src/js/footer';

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
