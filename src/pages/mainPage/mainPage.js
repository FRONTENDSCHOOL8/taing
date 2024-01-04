import 'swiper/bundle';
import 'swiper/css';
import Swiper from 'swiper';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.main-banner-swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
