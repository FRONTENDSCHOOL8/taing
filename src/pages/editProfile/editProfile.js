import { insertTemplate } from '/src/util/insertTemplate';

//! 프로필 클릭 시 닉네임 & 사진 수정
// nickname 프로필 버튼에 할당

// 프로필 데이터 추출
function extractProfileData(userData) {
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
}

// 프로필 렌더링
function renderProfile(profileData) {
  profileData.forEach((item, index) => {
    const template = `
        <li class="profileList">
          <button
            class="profileButton relative mb-12pxr max-w-114pxr tablet:max-w-132pxr desktop:max-w-234pxr"
          >
            <img
              src="${getImage(item, item.profileImage)}"
              alt="${item.profileNickname} 프로필 사진"
              class="rounded ${index > 0 ? 'opacity-50' : ''}"
            />
            ${
              index > 0
                ? '<img src="/assets/profile/Icon/pencil.svg" alt="pencil" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform desktop:w-60pxr" />'
                : ''
            }
            
          </button>
          <p class="text-center text-12pxr text-taing-2">${
            item.profileNickname
          }</p>
        </li>`;
    insertTemplate('.profile-photo > ul', template);
  });
}

// 초기화
async function init() {
  const loginUser = await JSON.parse(localStorage.getItem('auth'));
  const userData = loginUser.model;
  const profileData = extractProfileData(userData);
  renderProfile(profileData);

  const profileButtons = document.querySelectorAll('.profileButton');
  profileButtons.forEach((item) => {
    item.addEventListener('click', () => {
      window.location.href = '/src/pages/editProfile/profileForEdit.html';
    });
  });
}

init();

function getImage(item, fileName) {
  return `${import.meta.env.VITE_PB_URL}/api/files/${item.collectionId}/${
    item.id
  }/${fileName}`;
}
