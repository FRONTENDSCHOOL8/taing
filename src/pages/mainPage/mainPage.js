import 'swiper/bundle';
import 'swiper/css';
import Swiper from 'swiper';

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

const mainBannerPaginationImg = document.querySelectorAll(
  '.main-banner-pagination > .swiper-pagination-bullet > img'
);

// 슬라이드 변경 시 pagination 이미지 변경
mainBannerSwiper.on('slideChange', () => {
  mainBannerPaginationImg.forEach((pagination) => {
    pagination.src = '/src/assets/mainPage/Icon/swiper_pagination_bullet.svg';
    if (
      pagination.parentElement.classList.contains(
        'swiper-pagination-bullet-active'
      )
    ) {
      pagination.src =
        '/src/assets/mainPage/Icon/swiper_pagination_bullet_active.svg';
    }
  });
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
