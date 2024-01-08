import Swiper from 'swiper';
import 'swiper/bundle';
import 'swiper/css';
import { crud } from '/src/util/crud';
import { getImageURL } from '/src/util/getImageURL';
import { insertTemplate } from '/src/util/insertTemplate';

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
      return `<button class="${className}"><img src="/src/assets/mainPage/Icon/swiper_pagination_bullet.svg" class="w-6pxr h-6pxr gap-4pxr tablet:w-8pxr tablet:h-8pxr desktop:w-12pxr desktop:h-12pxr"/></button>`;
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
        pagination.src =
          '/src/assets/mainPage/Icon/swiper_pagination_bullet.svg';

        if (
          pagination.parentElement.classList.contains(
            'swiper-pagination-bullet-active'
          )
        ) {
          pagination.src =
            '/src/assets/mainPage/Icon/swiper_pagination_bullet_active.svg';
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
    autoplayButton.src = '/src/assets/mainPage/Icon/play.png';
  } else {
    mainBannerSwiper.autoplay.start();
    autoplayButton.src = '/src/assets/mainPage/Icon/pause.png';
  }
});

// 추천 콘텐츠 데이터 가져오기
const suggestionContents = await getContentData('suggestion_contents');

suggestionContents.forEach((item) => {
  const template = /* html */ `
  <li class="swiper-slide overflow-hidden rounded-lg">
    <figure>
      <img
        src="${getImageURL(item)}"
        alt="${item.name}"
      />
      <figcaption
        class="mt-4pxr hidden text-12pxr text-taing-1 tablet:block desktop:block desktop:text-21pxr"
      >
        ${item.name}
      </figcaption>
    </figure>
  </li>
  `;

  insertTemplate(template, '.suggestion-content-swiper > ul');
});

// quick vod 데이터 가져오기
const quickVod = await getContentData('quick_vod');

quickVod.forEach((item) => {
  const template = /* html */ `
    <li class="swiper-slide relative overflow-hidden rounded-lg">
      <img
        src="/src/assets/mainPage/Icon/quick_vod.svg"
        alt="quick vod"
        class="leftop-4pxr absolute top-4pxr h-16pxr w-56pxr"
      />
      <figure>
        <img
          src="/src/assets/mainPage/content/suggestion-2.png"
          alt="jtbc 뉴스룸"
        />
        <figcaption class="text-12pxr text-white tablet:text-14pxr">
          <h3 class="mt-4pxr font-bold text-taing-1">JTBC 뉴스룸</h3>
          <p class="text-taing-2">1화</p>
        </figcaption>
      </figure>
    </li>
  `;

  insertTemplate(template, '.quick-vod-swiper > ul');
});

// 오리지널 콘텐츠 데이터 가져오기
const originalContents = await getContentData('original_contents');

originalContents.forEach((item) => {
  const template = /* html */ `
    <li class="swiper-slide overflow-hidden rounded-lg">
      <figure>
        <img
          src="${getImageURL(item)}"
          alt="${item.name}"
          />
        <figcaption class="sr-only">${item.name}</figcaption>
      </figure>
    </li>
  `;

  insertTemplate(template, '.original-content-swiper > ul');
});

//* 콜렉션의 테이터를 가져오는 함수
async function getContentData(collection) {
  const response = await crud.get(
    `${import.meta.env.VITE_PB_URL}/api/collections/${collection}/records`
  );

  return response.data.items;
}
