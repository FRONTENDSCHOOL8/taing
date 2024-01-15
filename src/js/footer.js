import Swiper from 'swiper';
import 'swiper/bundle';
import 'swiper/css';

export default function footer() {
  new Swiper('.notification-swiper', {
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}
