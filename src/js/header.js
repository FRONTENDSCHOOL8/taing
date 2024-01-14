import { insertTemplate } from '/src/util/insertTemplate';
import { getImageURL } from '/src/util/getImageURL';

export default async function header() {
  if (!localStorage.getItem('auth')) {
    return;
  } else {
    const auth = await JSON.parse(localStorage.getItem('auth'));

    const { isAuth, model } = auth;

    const template = /* html */ `
      <div class="flex gap-16pxr tablet:gap-24pxr desktop:40pxr">
        <button type="button">
          <img src="/assets/header/search_icon.svg" alt="검색 버튼" class="w-18pxr tablet:w-24pxr desktop:w-40pxr"/>
        </button>
        <a href="/src/pages/selectProfile/">
          <img src="${getImageURL(
            model,
            'profile'
          )}" alt="사용자 프로필 이미지" class="w-18pxr rounded-sm tablet:w-24pxr desktop:w-40pxr" />
        </a>
      </div>
    `;

    if (isAuth) {
      insertTemplate('#header-wrapper', template);
    } else {
      return;
    }
  }
}
