import 'swiper/bundle';
import 'swiper/css';
import Swiper from 'swiper';

// main banner swiper slide
const swiper = new Swiper('.main-banner-swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.main-banner-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}"><img src="/src/assets/mainPage/Icon/swiper_pagination_bullet.png" class="w-6pxr h-6pxr gap-4pxr cursor-pointer"/></span>`;
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
});

// suggestion2 swiper slide
new Swiper('.quick-vod-swiper', {
  slidesPerView: 2.2,
});

// popular program swiper slide
new Swiper('.popular-program-swiper', {
  slidesPerView: 3.3,
});

// popular live channel swiper slide
new Swiper('.popular-live-swiper', {
  slidesPerView: 2.2,
});

// original content swiper slide
new Swiper('.original-content-swiper', {
  slidesPerView: 2.2,
});

//event swiper slide
new Swiper('.event-swiper', {
  slidesPerView: 2.2,
});

const autoplayButton = document.querySelector('.autoplayButton > img');

// 오토 슬라이드 버튼 클릭 시 슬라이드 정지/재생, 버튼 이미지 변경
autoplayButton.addEventListener('click', () => {
  if (swiper.autoplay.running) {
    swiper.autoplay.stop();
    autoplayButton.src = '/src/assets/mainPage/Icon/play.png';
  } else {
    swiper.autoplay.start();
    autoplayButton.src = '/src/assets/mainPage/Icon/pause.png';
  }
});
