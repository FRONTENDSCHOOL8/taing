import { getData } from '/src/util/crud';
import { getImageURL } from '/src/util/getImageURL';
import { insertTemplate } from '/src/util/insertTemplate';

/* 
* 1. 파일업로드
- input type="file" : 파일 업로드.
- submit button : 서버로 파일 전송
- fetch
*/

/*
 * 프로필 수정: patch
 * 프로필 추가: patch
 */

//! 프로필 클릭 시 닉네임 & 사진 수정
// 만드는중.. 이거 리튼한테 가져온거 아직 수정안했ㅅ브니다 ..
let url = 'http://example.com/server';
let data = { username: 'example' };

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

//! DB Data
// 로그인된 계정의 유저 데이터 가져오기
const userData = await getData('users', {
  filter: 'userId = "mnd-prince"',
});

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
          src="/public/assets/profile/Icon/pencil.svg"
          alt="pencil"
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
          src="/public/assets/profile/Icon/pencil.svg" 
          alt="pencil"
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
          src="/public/assets/profile/Icon/pencil.svg"
          alt="pencil"
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
          class="rounded opacity-50"
        />
        <img
          src="/public/assets/profile/Icon/pencil.svg"
          alt="pencil"
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform desktop:w-60pxr"
        />
      </button>
      <p class="text-center text-12pxr text-taing-2">${
        item.profile_4_nickname
      }</p>
    </li>`;
  insertTemplate('.profile-photo > ul', template);
});
