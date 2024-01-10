const modal = document.querySelector('.modal-container');

// 모달 창 열기
function openModal() {
  // modal.style.display = 'block';
}

// 모달 창 닫기
function closeModal() {
  modal.style.display = 'none';
}

// 모달 창 닫기 (24시간 동안 열리지 않음)
function closeFor24Hours() {
  closeModal(); // 모달 창 닫기
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  // 24시간 동안 모달 창이 열리지 않도록 localStorage에 저장
  localStorage.setItem('modalClosed', 'true');
  localStorage.setItem('modalClosedUntil', tomorrow.toISOString());
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
