import { range } from 'lodash';
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

// 타입을 지정하고 싶은 객체 바로 위에 타입스크립트 구문이 포함된 jsdoc 주석을 써 주셔야 타입스크립트의 지원을 받을 수 있습니다,
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      fontSize: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      screens: {
        tablet: '768px',
        desktop: '1280px',
      },
    },
    backgroundImage: {
      'header-bg':
        'linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 100%)',
      'mainBanner-nextBtn': 'url(/src/assets/mainPage/arrow_next.svg)',
      'mainBanner-prevBtn': 'url(/src/assets/mainPage/arrow_prev.svg)',
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'], // 기본 폰트를 Pretendard로 지정 (따로 건드릴 거 없이 그냥 쓰면 됨)
    },
  },
  plugins: [],
};
