// input placeholder
const searchInput = document.querySelector('.search-text');

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

// 현재 시간
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
