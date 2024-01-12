const modalContainer = document.querySelector('.modal-container');
const buttonTodayClose = document.querySelector('.button_today_close');

// 모달 창 열기
function openModal() {
  modalContainer.classList.remove('hidden');
  modalContainer.classList.add('flex');
}

// 모달 창 닫기
function closeModal() {
  modalContainer.classList.remove('flex');
  modalContainer.classList.add('hidden');
}

// 모달 창 닫기 (24시간 동안 열리지 않음)
function closeFor24Hours() {
  closeModal(); // 모달 창 닫기
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  // 24시간 동안 모달 창이 열리지 않도록 localStorage에 저장
  localStorage.setItem('modalClosed', 'true');
  localStorage.setItem('modalClosedUntil', JSON.stringify(tomorrow));
}

// 페이지 로드 시 모달 창 상태 초기화
function initializeModal() {
  const modalClosed = localStorage.getItem('modalClosed');
  const modalClosedUntil = localStorage.getItem('modalClosedUntil');

  if (modalClosed === 'true' && new Date() < new Date(modalClosedUntil)) {
    closeModal();
  } else {
    openModal();
  }
}

// 페이지 로드 시 모달 초기화 함수 실행
window.addEventListener('load', initializeModal);

// 버튼 클릭 이벤트 처리
document
  .querySelector('.button_today_close')
  .addEventListener('click', closeFor24Hours);
document.querySelector('.button_close').addEventListener('click', closeModal);

/* 
  1. 오늘 안보기 누른 시점의 날짜 받아와서 저장, 모달에 hidden 클래스 추가, 모달 상태 변수에 false 저장(상태변수가 false면 모달 안보이게)
  2. load 이벤트 발생하면 현재 날짜 받아와서 저장된 날짜와 비교
  3. 저장된 날짜가 현재 날짜보다 작으면 상태변수 true로 바꾸고 모달 보이게 하기
*/

//! 내가 쓴 코드
let closeToday = false;

buttonTodayClose.addEventListener('click', () => {
  const closeDay = new Date().getDate(); // 11
  localStorage.setItem('closeDay', JSON.stringify(closeDay));
  closeToday = true;
});

window.addEventListener('load', () => {
  const now = new Date().getDate(); // 12
  const closeDayFromStorage = JSON.parse(localStorage.getItem('closeDay'));

  if (now !== Number(closeDayFromStorage)) {
    closeToday = false;
  }

  if (closeToday) {
    closeModal();
  } else {
    openModal();
  }
});
