import 'swiper/bundle';
// import 'swiper/css';
import Swiper from 'swiper';

// original content swiper
new Swiper('.swiper-container-1', {
  slidesPerView: 1,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
  },
});

// recommended content swiper
new Swiper('.swiper-container-2', {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  speed: 8000,
  loop: true,
  spaceBetween: 15,
  slidesPerView: 1.6,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.swiper-container-3', {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 8000,
  loop: true,
  spaceBetween: 15,
  slidesPerView: 1.6,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
});
