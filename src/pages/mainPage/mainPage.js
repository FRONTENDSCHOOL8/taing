import Swiper from 'swiper';
import 'swiper/bundle';
import 'swiper/css';
import { crud } from '/src/util/crud';
import { pb } from '/src/api/pocketBase';
import { getImageURL } from '/src/util/getImageURL';
import { insertTemplate } from '/src/util/insertTemplate';
import { getContentData, getContentDataByRank } from '/src/util/getContentData';

// main banner swiper slide
const mainBannerSwiper = new Swiper('.main-banner-swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.main-banner-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<button class="${className}"><img src="/assets/mainPage/Icon/swiper_pagination_bullet.svg" class="w-6pxr h-6pxr gap-4pxr tablet:w-8pxr tablet:h-8pxr desktop:w-12pxr desktop:h-12pxr"/></button>`;
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    slideChange() {
      const mainBannerPaginationImg = document.querySelectorAll(
        '.main-banner-pagination > .swiper-pagination-bullet > img'
      );

      mainBannerPaginationImg.forEach((pagination) => {
        pagination.src = '/assets/mainPage/Icon/swiper_pagination_bullet.svg';

        if (
          pagination.parentElement.classList.contains(
            'swiper-pagination-bullet-active'
          )
        ) {
          pagination.src =
            '/assets/mainPage/Icon/swiper_pagination_bullet_active.svg';
        }
      });
    },
  },
});

// suggestion swiper slide
new Swiper('.suggestion-content-swiper', {
  slidesPerView: 3.3,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 5.3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 7.3,
      spaceBetween: 16,
    },
  },
});

// suggestion2 swiper slide
new Swiper('.quick-vod-swiper', {
  slidesPerView: 2.2,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 3.3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5.3,
      spaceBetween: 16,
    },
  },
});

// popular program swiper slide
new Swiper('.popular-program-swiper', {
  slidesPerView: 3.3,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 5.3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 7.3,
      spaceBetween: 16,
    },
  },
});

// popular live channel swiper slide
new Swiper('.popular-live-swiper', {
  slidesPerView: 2.2,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 3.3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5.3,
      spaceBetween: 16,
    },
  },
});

// original content swiper slide
new Swiper('.original-content-swiper', {
  slidesPerView: 2.2,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 3.3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5.3,
      spaceBetween: 16,
    },
  },
});

//event swiper slide
new Swiper('.event-swiper', {
  slidesPerView: 2.2,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 3.3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5.2,
      spaceBetween: 16,
    },
  },
});

const autoplayButton = document.querySelector('.autoplayButton > img');

// 오토 슬라이드 버튼 클릭 시 슬라이드 정지/재생, 버튼 이미지 변경
autoplayButton.addEventListener('click', () => {
  if (mainBannerSwiper.autoplay.running) {
    mainBannerSwiper.autoplay.stop();
    autoplayButton.src = '/assets/mainPage/Icon/play.png';
  } else {
    mainBannerSwiper.autoplay.start();
    autoplayButton.src = '/assets/mainPage/Icon/pause.png';
  }
});

//! 메인 페이지 데이터 가져오기
// 추천 콘텐츠 데이터 가져오기
const suggestionContents = await getContentData('suggestion_contents');

const suggestionContentsArray = [];

suggestionContents.forEach((item) => {
  const template = /* html */ `
  <li class="swiper-slide">
    <figure>
      <img
        src="${getImageURL(item)}"
        alt="${item.name}"
        class="rounded-sm"
      />
      <figcaption
        class="mt-4pxr hidden text-12pxr text-taing-1 tablet:block desktop:block desktop:text-21pxr"
      >
        ${item.name}
      </figcaption>
    </figure>
  </li>
  `;

  suggestionContentsArray.push(template);
});

insertTemplate(suggestionContentsArray, '.suggestion-content-swiper > ul');

// quick vod 데이터 가져오기
const quickVod = await getContentData('quick_vod');

let quickVodArray = [];

quickVod.forEach((item) => {
  const template = /* html */ `
    <li class="swiper-slide relative">
      <img
        src="/assets/mainPage/Icon/quick_vod.svg"
        alt="quick vod"
        class="left-4pxr absolute top-4pxr h-16pxr w-56pxr rounded-sm"
      />
      <figure>
        <img
          src="${getImageURL(item)}"
          alt="${item.name}"
        />
        <figcaption class="text-12pxr text-white tablet:text-14pxr">
          <h3 class="mt-4pxr font-bold text-taing-1">${item.name}</h3>
          <p class="text-taing-2">${item.episode}화</p>
        </figcaption>
      </figure>
    </li>
  `;

  quickVodArray.push(template);
});

const quickVodHtml = quickVodArray.join('');

insertTemplate(quickVodHtml, '.quick-vod-swiper > ul');

// 실시간 인기 프로그램 가져오기
const popularProgram = await getContentDataByRank('popular_program');

const popularProgramArray = [];

popularProgram.forEach((item) => {
  const template = /* html */ `
    <li class="swiper-slide">
      <figure>
        <img
          src="${getImageURL(item)}"
          alt="${item.name}"
          class="rounded-sm"
        />
        <figcaption class="relative flex">
          <span
            class="absolute -top-18pxr rotate-3 font-noto-sans-kr text-34pxr font-bold text-white"
            >${item.rank}</span
          >
          <h3 class="ms-24pxr mt-8pxr text-12pxr text-taing-1">
            ${item.name}
          </h3>
        </figcaption>
      </figure>
    </li> 
  `;

  popularProgramArray.push(template);
});

const popularProgramHtml = popularProgramArray.join('');

insertTemplate(popularProgramHtml, '.popular-program-swiper > ul');

// 실시간 인기 라이브 채널 가져오기
const popularLive = await getContentDataByRank('popular_live');

popularLive.forEach((item) => {
  const template = /* html */ `
  <li class="swiper-slide relative">
    <figure>
      <img
        src="${getImageURL(item)}"
        alt="${item.name}"
        class="rounded-sm"
      />
      <figcaption class="flex items-center text-12pxr text-white">
        <span class="rotate-3 font-noto-sans-kr text-34pxr font-bold"
          >${item.rank}</span
        >
        <h3 class="ms-14pxr leading-18pxr">
          <span class="font-semibold">${item.channelName}</span>
          <p class="text-taing-1">${item.name}</p>
          <p class="text-taing-2">${item.rating}%</p>
        </h3>
      </figcaption>
    </figure>
  </li>
  `;

  insertTemplate(template, '.popular-live-swiper > ul');
});

// 오리지널 콘텐츠 데이터 가져오기
const originalContents = await getContentData('original_contents');

originalContents.forEach((item) => {
  const template = /* html */ `
    <li class="swiper-slide">
      <figure>
        <img
          src="${getImageURL(item)}"
          alt="${item.name}"
          class="rounded-sm"
          />
        <figcaption class="sr-only">${item.name}</figcaption>
      </figure>
    </li>
  `;

  insertTemplate(template, '.original-content-swiper > ul');
});

// 이벤트 데이터 가져오기
const eventContents = await getContentData('event');

eventContents.forEach((item) => {
  const template = /* html */ `
  <li class="swiper-slide">
    <figure>
      <img
        src="${getImageURL(item)}"
        alt="${item.name}"
        class="rounded-sm"
      />
      <figcaption class="sr-only">
        ${item.name}
      </figcaption>
    </figure>
  </li> 
  `;

  insertTemplate(template, '.event-swiper > ul');
});

//* 콜렉션의 테이터를 가져오는 함수

const userEmail = document.querySelector('#user-email').value;

console.log(userEmail);

const data = {
  username: JSON.stringify(userEmail),
};

const buttonSubmit = document.querySelector('.button-submit');

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  crud.post(`${import.meta.env.VITE_PB_API}/collections/users/records`, data);
});
