import 'swiper/bundle';
import Swiper from 'swiper';

// original content swiper
new Swiper('.swiper-container-1', {
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
  },
  keyboard: {
    enabled: true,
  },
});

// recommended content swiper
new Swiper('.swiper-container-2', {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  speed: 7000,
  loop: true,
  spaceBetween: 15,
  slidesPerView: 1.6,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
  on: {
    init() {
      this.el.children[0].style.transitionTimingFunction = 'linear';
    },
    update() {
      this.el.children[0].style.transitionTimingFunction = 'linear';
    },
  },
});

new Swiper('.swiper-container-3', {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 7000,
  loop: true,
  spaceBetween: 15,
  slidesPerView: 1.6,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
  on: {
    init() {
      this.el.children[0].style.transitionTimingFunction = 'linear';
    },
    update() {
      this.el.children[0].style.transitionTimingFunction = 'linear';
    },
  },
});
