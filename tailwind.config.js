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
      },
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      fontSize: {
        ...pxToRemFunc(0, 1000),
      },
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      },
      screens: {
        tablet: '768px',
        desktop: '1280px',
      },
      colors: {
        primary: '#ff153c',
        'button-default': '#ff153c',
        'button-hover': '#cc1030',
        'button-submit-default': '#404040',
        'button-submit-active': '#e1e1e1',
        'button-submit-hover': '#ffffff',
        input: '#212121',
        line: '#404040',
      },
      textColor: {
        'taing-1': '#c4c4c4',
        'taing-2': '#a6a6a6',
        'taing-3': '#898989',
        'taing-4': '#6b6b6b',
        'taing-5': '#565656',
        'taing-6': '#404040',
      },
      backgroundImage: {
        header:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-up-1': 'fade-up 1s ease-in',
        'fade-up-2': 'fade-up 1s ease-in 0.2s',
        'fade-up-3': 'fade-up 1s ease-in 0.3s',
      },
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'], // 기본 폰트를 Pretendard로 지정 (따로 건드릴 거 없이 그냥 쓰면 됨)
      'noto-sans-kr': ['Noto Sans KR', 'sans-serif'],
    },
  },
  plugins: [],
};
