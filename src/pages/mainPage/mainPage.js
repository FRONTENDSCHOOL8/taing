import Swiper from 'swiper';
import 'swiper/bundle';
import { getImageURL } from '/src/util/getImageURL';
import { insertTemplate } from '/src/util/insertTemplate';
import { getData } from '/src/util/crud';
import state from '/src/util/state';
import gsap from 'gsap';

//! 메인 페이지 데이터 가져오기
const mainBannerArr = [1, 1, 1, 1]; // 메인 배너 임시 데이터

mainBannerArr.forEach(() => {
  const template = /* html */ `
    <li class="swiper-slide">
      <figure class="flex justify-center">
        <img
          src="/assets/mainPage/common/mainBannerImg.png"
          alt="test image"
          class="w-full"
        />
        <figcaption
          class="absolute left-[3%] top-[70%] text-12pxr font-semibold text-white tablet:text-16pxr desktop:text-28pxr"
        >
          인생 2회차를 사는 판타지 드라마
        </figcaption>
      </figure>
      <a
        href="/"
        class="absolute bottom-[12%] right-12pxr flex h-27pxr w-64pxr items-center justify-center rounded-md border border-[#a6a6a6] text-12pxr text-white tablet:right-38pxr tablet:h-44pxr tablet:w-128pxr desktop:right-70pxr desktop:h-78pxr desktop:w-220pxr desktop:text-22pxr"
        >자세히보기</a
      >
    </li>
  `;

  insertTemplate('.main-banner-swiper > ul', template);
});

let [isLoading, setIsLoading, onChangeIsLoading] = await state(true);
const loadingSpinner = document.querySelectorAll('.loading');

//! 로딩 상태변화 감지
onChangeIsLoading((newState) => {
  if (newState) {
    loadingSpinner.forEach((spinner) => {
      spinner.classList.remove('hidden');
    });
  } else {
    loadingSpinner.forEach((spinner) => {
      spinner.classList.add('hidden');
    });
  }
});

//! DB데이터 가져오기
const suggestionContents = await getData('suggestion_contents');
const quickVod = await getData('quick_vod');
const popularLive = await getData('popular_live', {
  sort: 'rank',
});
const originalContents = await getData('original_contents');
const eventContents = await getData('event');
const popularProgram = await getData('popular_program', {
  sort: 'rank',
});

setIsLoading(!isLoading);

suggestionContents.forEach((item) => {
  const template = /* html */ `
  <li class="swiper-slide">
    <a href="/">
      <figure>
        <div class="relative">
          <img src="${getImageURL(item)}" alt="${
            item.name
          } 포스터" class="rounded-sm" />
          ${
            item.isAdultContent
              ? '<img src="/assets/mainPage/icon/adult.svg" alt="adult content badge" class="right-8pxr absolute top-8pxr w-[20%]" />'
              : ''
          }
          ${
            item.isOriginalContent
              ? '<img src="/assets/mainPage/icon/taing_original.svg" alt="original content badge" class="absolute left-1/2 bottom-16pxr w-1/2 -translate-x-1/2" />'
              : ''
          }
        </div>
        <figcaption class="mt-4pxr hidden text-12pxr text-taing-1 tablet:block desktop:block desktop:text-21pxr" >
          ${item.name}
        </figcaption>
      </figure>
    </a>
  </li>`;

  insertTemplate('.suggestion-content-swiper > ul', template);
});

quickVod.forEach((item) => {
  const template = /* html */ `
    <li class="swiper-slide">
      <a href="/">
        <figure>
          <div relative>
            <img
              src="/assets/mainPage/icon/quick_vod.svg"
              alt="quick vod"
              class="left-4pxr absolute top-4pxr h-16pxr w-56pxr rounded-sm"
            />
            <img
              src="${getImageURL(item)}"
              alt="${item.name} 포스터"
            />
          </div>
          <figcaption class="text-12pxr text-white tablet:text-14pxr">
            <h3 class="mt-4pxr font-bold text-taing-1">${item.name}</h3>
            <p class="text-taing-2">${item.episode}화</p>
          </figcaption>
        </figure>
      </a>
    </li>`;

  insertTemplate('.quick-vod-swiper > ul', template);
});

popularProgram.forEach((item) => {
  const template = /* html */ `
    <li class="swiper-slide">
      <a href="/">
        <figure>
          <div class="relative">
            ${
              item.isAdultContent
                ? '<img src="/assets/mainPage/icon/adult.svg" alt="adult content badge" class="right-8pxr absolute top-8pxr w-[20%]" />'
                : ''
            }
            <img
              src="${getImageURL(item)}"
              alt="${item.name} 포스터"
              class="rounded-sm"
            />
          </div>
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
      </a>
    </li>`;

  insertTemplate('.popular-program-swiper > ul', template);
});

popularLive.forEach((item) => {
  const template = /* html */ `
  <li class="swiper-slide relative">
    <a href="/">
      <figure>
        <img
          src="${getImageURL(item)}"
          alt="${item.name} 포스터"
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
    </a>
  </li>`;

  insertTemplate('.popular-live-swiper > ul', template);
});

originalContents.forEach((item) => {
  const template = /* html */ `
    <li class="swiper-slide">
      <a href="/">
        <figure>
          <img
            src="${getImageURL(item)}"
            alt="${item.name} 포스터"
            class="rounded-sm"
            />
          <figcaption class="sr-only">${item.name}</figcaption>
        </figure>
      </a>
    </li>`;

  insertTemplate('.original-content-swiper > ul', template);
});

eventContents.forEach((item) => {
  const template = /* html */ `
  <li class="swiper-slide">
    <a href="/">
      <figure>
        <img
          src="${getImageURL(item)}"
          alt="${item.name} 포스터"
          class="rounded-sm"
        />
        <figcaption class="sr-only">
          ${item.name}
        </figcaption>
      </figure>
    </a>
  </li>`;

  insertTemplate('.event-swiper > ul', template);
});

// hover 애니메이션(gsap)
const contentCard = document.querySelectorAll(
  'li.swiper-slide:not(.main-banner-swiper li.swiper-slide, .notification-swiper li.swiper-slide, .event-swiper li.swiper-slide)'
);

contentCard.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      y: -10,
      duration: 0.2,
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      y: 0,
      duration: 0.2,
    });
  });
});

const autoplayButton = document.querySelector('.autoplayButton');

// 오토 슬라이드 버튼 클릭 시 슬라이드 정지/재생, 버튼 이미지 변경
autoplayButton.addEventListener('click', () => {
  if (mainBannerSwiper.autoplay.running) {
    mainBannerSwiper.autoplay.stop();
    autoplayButton.children[0].src = '/assets/mainPage/icon/play.png';
  } else {
    mainBannerSwiper.autoplay.start();
    autoplayButton.children[0].src = '/assets/mainPage/icon/pause.png';
  }
});

// main banner swiper slide
const mainBannerSwiper = new Swiper('.main-banner-swiper', {
  loop: true,
  navigation: {
    nextEl: '.mainBanner-next',
    prevEl: '.mainBanner-prev',
  },
  pagination: {
    el: '.main-banner-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<button class="${className}"><img src="/assets/mainPage/icon/swiper_pagination_bullet.svg" alt="pagination button" class="w-6pxr h-6pxr gap-4pxr tablet:w-8pxr tablet:h-8pxr desktop:w-12pxr desktop:h-12pxr"/></button>`;
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
        pagination.src = '/assets/mainPage/icon/swiper_pagination_bullet.svg';

        if (
          pagination.parentElement.classList.contains(
            'swiper-pagination-bullet-active'
          )
        ) {
          pagination.src =
            '/assets/mainPage/icon/swiper_pagination_bullet_active.svg';
        }
      });
    },
  },
});

//! 슬라이드 생성
// suggestion swiper slide
new Swiper('.suggestion-content-swiper', {
  slidesPerView: 3.3,
  slidesPerGroup: 3,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 5.3,
      slidesPerGroup: 5,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 7.3,
      slidesPerGroup: 7,
      spaceBetween: 16,
    },
  },
});

// suggestion2 swiper slide
new Swiper('.quick-vod-swiper', {
  slidesPerView: 2.2,
  slidesPerGroup: 2,
  spaceBetween: 8,
  navigation: {
    nextEl: '.quick-vod-next',
    prevEl: '.quick-vod-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3.3,
      slidesPerGroup: 3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5.3,
      slidesPerGroup: 5,
      spaceBetween: 16,
    },
  },
});

// popular program swiper slide
new Swiper('.popular-program-swiper', {
  slidesPerView: 3.3,
  slidesPerGroup: 3,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 5.3,
      slidesPerGroup: 5,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 7.3,
      slidesPerGroup: 7,
      spaceBetween: 16,
    },
  },
});

// popular live channel swiper slide
new Swiper('.popular-live-swiper', {
  slidesPerView: 2.2,
  slidesPerGroup: 2,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 3.3,
      slidesPerGroup: 3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5.3,
      slidesPerGroup: 5,
      spaceBetween: 16,
    },
  },
});

// original content swiper slide
new Swiper('.original-content-swiper', {
  slidesPerView: 2.2,
  slidesPerGroup: 2,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 3.3,
      slidesPerGroup: 3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5.3,
      slidesPerGroup: 5,
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
      slidesPerGroup: 3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5.2,
      slidesPerGroup: 5,
      spaceBetween: 16,
    },
  },
});
