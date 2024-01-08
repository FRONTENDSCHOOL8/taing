import Swiper from 'swiper';
import 'swiper/bundle';
import 'swiper/css';

export default function footer() {
  new Swiper('.notification-swiper', {
    slidesPerView: 1,
    direction: 'vertical',
    height: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      init() {
        this.el.style.height = this.slides[0].scrollHeight + 'px';
      },
      slideChange() {
        this.el.style.height =
          this.slides[this.activeIndex].scrollHeight + 'px';
      },
    },
  });
}
