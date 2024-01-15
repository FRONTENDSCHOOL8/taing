import { getData } from '/src/util/crud';
import { getImageURL } from '/src/util/getImageURL';
import { insertTemplate } from '/src/util/insertTemplate';

// 클릭한 프로필버튼의 alt.nickname과 서버의 nickname 을 연결

// 프로필 데이터 추출
const extractProfileData = (userData) => {
  let profileData = [];
  for (let i = 1; i <= 4; i++) {
    const profileImage = `profile_${i}`;
    const profileNickname = `profile_${i}_nickname`;

    if (userData[profileImage] || userData[profileNickname]) {
      profileData.push({
        profileImage: userData[profileImage],
        profileNickname: userData[profileNickname],
        collectionId: userData.collectionId,
        id: userData.id,
      });
    }
  }
  console.log(profileData);
  return profileData;
};

// 프로필 렌더링
const renderProfile = (profileData) => {
  profileData.forEach((item) => {
    const template = `
      <li class="profileList">
        <button
          class="profileButton relative mb-12pxr max-w-114pxr tablet:max-w-132pxr desktop:max-w-234pxr"
        >
          <img
            src="${getImage(item, item.profileImage)}"
            alt="${item.profileNickname} 프로필 사진"
            class="rounded opacity-50"
          />
          <img
            src="/public/assets/profile/Icon/lock.svg"
            alt="lock"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform desktop:w-60pxr"
          />
        </button>
        <p class="text-center text-12pxr text-taing-2">${
          item.profileNickname
        }</p>
      </li>`;
    insertTemplate('.profile-photo > ul', template);
  });
};

// 초기화
const init = async () => {
  const loginUser = await JSON.parse(localStorage.getItem('auth'));
  const userData = loginUser.model;
  const profileData = extractProfileData(userData);
  renderProfile(profileData);

  const profileButtons = document.querySelectorAll('.profileButton');
  profileButtons.forEach((item) => {
    item.addEventListener('click', () => {
      window.location.href = '/src/pages/mainPage/index.html';
    });
  });
};

init();

function getImage(item, fileName) {
  return `${import.meta.env.VITE_PB_URL}/api/files/${item.collectionId}/${
    item.id
  }/${fileName}`;
}
