import { insertTemplate } from '/src/util/insertTemplate';
import { getImageURL } from '/src/util/getImageURL';
import gsap from 'gsap';

export default async function header() {
  const auth = await JSON.parse(localStorage.getItem('auth'));
  const currentPage = window.location.pathname;
  const headerLogo = document.querySelector('#header a');
  console.log(headerLogo);

  let isAuth;
  let model;

  if (auth !== null && auth !== undefined) {
    isAuth = auth.isAuth;
    model = auth.model;
  }

  if (!isAuth) {
    headerLogo.href = '/index.html';
  } else {
    headerLogo.href = '/src/pages/mainPage/';
  }

  if (currentPage === '/src/pages/mainPage/') {
    if (!localStorage.getItem('auth')) {
      return;
    } else {
      const template = /* html */ `
      <div class="hidden justify-between items-center w-full tablet:flex desktop:flex">
        <nav
        class="text-12pxr text-taing-1 desktop:text-21pxr"
            >
        <ul class="flex gap-28pxr desktop:gap-52pxr">
          <li>
            <a href="/src/pages/mainPage/">
              <figure class="flex items-center gap-4pxr desktop:gap-10pxr">
                <img
                  src="/assets/header/navbar_live.svg"
                  alt=""
                  class="h-20pxr w-20pxr desktop:h-34pxr desktop:w-34pxr"
                />
                <figcaption>실시간</figcaption>
              </figure>
            </a>
          </li>
          <li><a href="/src/pages/mainPage/">TV프로그램</a></li>
          <li><a href="/src/pages/mainPage/">영화</a></li>
          <li>
            <a href="/src/pages/mainPage/">
              <figure>
                <img
                  src="/assets/header/paramount_logo.svg"
                  alt="파라마운트 로고"
                  class="h-15pxr desktop:h-26pxr"
                />
                <figcaption class="sr-only">파라마운트 플러스</figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex gap-16pxr tablet:gap-24pxr desktop:40pxr">
        <button type="button" id="search-button">
          <img src="/assets/header/search_icon.svg" alt="검색 버튼" class="w-18pxr tablet:w-24pxr desktop:w-40pxr"/>
        </button>
        <button type="button" id="userMenu-button">
          <img src="${getImageURL(
            model,
            'profile_1'
          )}" alt="사용자 프로필 이미지" class="w-18pxr rounded-sm tablet:w-24pxr desktop:w-40pxr" />
        </button>
        <div id="user-menu" class="absolute top-full right-40pxr desktop:right-70pxr z-20 hidden"></div>
      </div>`;

      if (
        currentPage === '/src/pages/mainPage/' ||
        (currentPage === '/src/pages/detailPage/' && isAuth)
      ) {
        insertTemplate('#header-wrapper', template);
      }
    }
  }
  // const currentPage = window.location.pathname;
  const searchModal = document.querySelector('#search');

  // 스크롤 이벤트(메인 페이지에서만 실행)
  if (currentPage === '/src/pages/mainPage/') {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const header = document.querySelector('#header');
      const currentScroll = window.scrollY;
      const isSearchHidden = searchModal.classList.contains('hidden');

      if (currentScroll > 20 && isSearchHidden) {
        gsap.to(header, {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        });
      }

      if (currentScroll < 20 && isSearchHidden) {
        gsap.to(header, {
          backgroundColor: 'transparent',
        });
      }

      if (window.scrollY > lastScroll && isSearchHidden) {
        gsap.to(header, {
          y: -header.offsetHeight,
          duration: 0.5,
        });
      }

      if (currentScroll < lastScroll && isSearchHidden) {
        gsap.to(header, {
          y: 0,
          duration: 0.5,
        });
      }

      if (!isSearchHidden) {
        gsap.to(header, {
          backgroundColor: '#191919',
        });
      }

      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    });
  }
}
