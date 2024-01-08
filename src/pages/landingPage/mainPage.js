import 'swiper/bundle';
import 'swiper/css';
import Swiper from 'swiper';

new Swiper('.swiper-container-1', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
