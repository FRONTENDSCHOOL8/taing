import { getData } from '/src/util/crud';
import { getImageURL } from '/src/util/getImageURL';
import { insertTemplate } from '/src/util/insertTemplate';

/* 
  todo 버튼 수정
  todo 활성화 프로필
 */

//! DB Data
// 로그인된 계정의 유저 데이터 가져오기
// (수정하기..)
const loginUser = await JSON.parse(localStorage.getItem('auth'));
const userData = loginUser.model;

// const userData = await getData('users', {
//   filter: 'userId = "mnd-prince"',
// });

//! rendering
userData.forEach((item) => {
  const template = /* html */ `
    <li class="profileList">
      <button
        class="profileButton relative mb-12pxr max-w-114pxr tablet:max-w-132pxr desktop:max-w-234pxr"
      >
        <img
          src="${getImageURL(item, 'profile_1')}"
          alt="${item.profile_1_nickname} 프로필 사진"
          class="rounded opacity-50"
        />
        <img
          src="/public/assets/profile/Icon/lock.svg"
          alt="lock"
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform desktop:w-60pxr"
        />
      </button>
      <p class="text-center text-12pxr text-taing-2">${
        item.profile_1_nickname
      }</p>
    </li>
    <li class="profile">
      <button
        class="profileButton relative mb-12pxr max-w-114pxr tablet:max-w-132pxr desktop:max-w-234pxr"
      >
        <img
          src="${getImageURL(item, 'profile_2')}"
          alt="${item.profile_2_nickname} 프로필 사진"
          class="rounded opacity-50"
        />
        <img
          src="/public/assets/profile/Icon/lock.svg"
          alt="lock"
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform desktop:w-60pxr"
        />
      </button>
      <p class="text-center text-12pxr text-taing-2">${
        item.profile_2_nickname
      }</p>
    </li>
    <li class="profile">
      <button
        class="profileButton relative mb-12pxr max-w-114pxr tablet:max-w-132pxr desktop:max-w-234pxr"
      >
        <img
          src="${getImageURL(item, 'profile_3')}"
          alt="${item.profile_3_nickname} 프로필 사진"
          class="rounded opacity-50"
        />
        <img
          src="/public/assets/profile/Icon/lock.svg"
          alt="lock"
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform desktop:w-60pxr"
        />
      </button>
      <p class="text-center text-12pxr text-taing-2">${
        item.profile_3_nickname
      }</p>
    </li>
    <li class="profile">
      <button
        class="profileButton relative mb-12pxr max-w-114pxr tablet:max-w-132pxr desktop:max-w-234pxr"
      >
        <img
          src="${getImageURL(item, 'profile_4')}"
          alt="${item.profile_4_nickname} 프로필 사진"
          class="rounded opacity-100"
        />
      </button>
      <p class="text-center text-12pxr text-taing-2">${
        item.profile_4_nickname
      }</p>
    </li>`;
  insertTemplate('.profile-photo > ul', template);
});

//! 프로필 클릭 시 메인 페이지 이동
// 수정하기..
const profileButtons = document.querySelectorAll('.profileButton');

profileButtons.forEach((item) => {
  item.addEventListener('click', () => {
    window.location.href = '/src/pages/mainPage/index.html';
  });
});
