import { insertTemplate } from '/src/util/insertTemplate';

export default async function searchPage() {
  renderRecentHistory(); // 최근 검색어 렌더링

  /* 모달 */
  const modalSection = document.querySelector('#search');
  const header = document.querySelector('#header');
  const button = document.querySelector('#search-button');
  const icon = header.querySelector('button > img');

  function clickSearchButton() {
    modalSection.classList.toggle('hidden');
    modalSection.classList.toggle('block');
    header.classList.toggle('bg-[#191919]');

    if (modalSection.classList.contains('block')) {
      icon.src = '/assets/searchPage/Cancel.png';
      icon.alt = '닫기 버튼';
    } else {
      icon.src = '/assets/header/search_icon.svg';
      icon.alt = '검색 버튼';
    }
  }
  // 헤더가 생기는 시점보다 먼저 저 버튼을 찾아서 오류 발생,,
  // button.addEventListener('click', clickSearchButton);

  button.addEventListener('click', clickSearchButton);

  /* 검색 */
  const searchInput = document.querySelector('.search-text');
  const searchButton = document.querySelector('.search-button');
  const historyList = document.querySelector('.history-list');
  const searchHistoryList = document.querySelector('.search-history-list');
  let deleteAllButton = null; // 모두 지우기 버튼

  // localStorage에서 검색어 불러오기
  function getSearchHistory() {
    const searchHistory = localStorage.getItem('searchHistory');

    return searchHistory ? JSON.parse(searchHistory) : [];
  }

  // localStorage에 검색어 저장
  function savedSearchHistory(val) {
    localStorage.setItem('searchHistory', JSON.stringify(val));

    renderRecentHistory();
  }

  // 최근 검색어 출력
  async function renderRecentHistory() {
    const searchHistory = await getSearchHistory(); // 검색어 불러오기
    let searchList = document.querySelector('.default');
    if (searchList) searchList.remove();

    historyList.innerHTML = ''; // 중복 제거 (초기화)

    if (searchHistory.length === 0) {
      const template = /* html */ `
      <li class="flex items-center">
        <p class="default inline-block">검색된 내용이 없습니다</p>
      </li>
      `;

      // historyList.insertAdjacentHTML('beforeend', template);
      insertTemplate('.history-list', template);

      deleteAllButton.style.display = 'none';
    } else {
      searchHistory.forEach((item) => {
        const template = /* html */ `
          <li class="flex items-center desktop:mt-16pxr mt-8pxr">
            <p class="inline-block">${item}</p>
            <button class="delete-button">
              <img
                class="ml-16pxr h-10pxr w-10pxr bg-center desktop:ml-20pxr desktop:h-13pxr desktop:w-13pxr"
                src="/assets/searchPage/X.png"
                alt="삭제 버튼"
              />
            </button>
          </li>
        `;

        // historyList.insertAdjacentHTML('beforeend', template);
        insertTemplate('.history-list', template);

        deleteAllButton.style.display = 'block';
      });
    }
  }

  // 검색어 입력
  function clickButton(e) {
    e.preventDefault();

    const val = searchInput.value;

    if (val) {
      const searchHistory = getSearchHistory();
      searchHistory.unshift(val);

      savedSearchHistory(searchHistory);
      searchInput.value = '';

      // 검색어 입력 시 모달 닫기
      modalSection.classList.toggle('hidden');
      modalSection.classList.toggle('block');

      // 모달 창 열렸을 때 헤더
      header.classList.toggle('bg-[#191919]');

      icon.src = '/assets/header/search_icon.svg';
      icon.alt = '검색 버튼';
    }
  }

  // 개별 삭제
  function clickDeleteButton(e) {
    const deleteButton = e.target.closest('button');

    if (deleteButton) {
      const li = deleteButton.closest('li');
      const text = li.querySelector('p').innerText;
      const searchHistory = getSearchHistory();
      const updateHistory = searchHistory.filter((item) => item !== text);
      savedSearchHistory(updateHistory);

      li.remove();
    }
  }

  // 모두 지우기 버튼 생성
  function createDeleteAllButton() {
    const template = /* html */ `
      <button
      class="deleteAll-button text-taing-5 tablet:text-15pxr desktop:text-21pxr"
    >
        모두 지우기
        <span
          class="ml-8pxr inline-block h-12pxr w-12pxr bg-[url('/assets/searchPage/Delete.png')] bg-contain bg-center desktop:h-20pxr desktop:w-20pxr"
        ></span>
      </button>
    `;

    // searchHistoryList.insertAdjacentHTML('beforeend', template);
    insertTemplate('.search-history-list', template);

    deleteAllButton = document.querySelector('.deleteAll-button');
  }
  createDeleteAllButton();

  // 모두 삭제
  function clickDeleteAllButton(e) {
    const deleteAllButton = e.target.closest('.deleteAll-button');
    if (deleteAllButton) {
      localStorage.removeItem('searchHistory');
      renderRecentHistory();
      deleteAllButton.style.display = 'none';
    }
  }
  searchButton.addEventListener('click', clickButton);
  historyList.addEventListener('click', clickDeleteButton);
  searchHistoryList.addEventListener('click', clickDeleteAllButton);

  /* placeholder 반응형 */
  function setPlaceholder() {
    const width = window.innerWidth;

    if (width >= 768) {
      searchInput.setAttribute(
        'placeholder',
        'TV 프로그램, 영화 제목 및 출연진으로 검색해보세요'
      );
    } else {
      searchInput.setAttribute('placeholder', '검색');
    }
  }

  window.addEventListener('DOMContentLoaded', setPlaceholder);
  window.addEventListener('resize', setPlaceholder);

  /* 현재 시간 */
  const time = document.querySelector('.time');

  function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const amPm = hour >= 12 ? '오후' : '오전';

    const currentTime = `${year}.${month}.${day} ${amPm} ${hour}:${minute} 기준`;

    return currentTime;
  }

  time.textContent = updateTime();
}
