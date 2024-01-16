export default function mainPageModal() {
  const modalContainer = document.querySelector('#mainPageModal');
  const closeButton = document.querySelector('#mainPageModal .closeButton');
  const closeTodayButton = document.querySelector(
    '#mainPageModal .closeTodayButton'
  );
  let closeFor24Hours = false;

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

  // 클릭 이벤트 실행

  // 닫기
  closeButton.addEventListener('click', closeModal);

  // 24시간 동안 보지 않기
  closeTodayButton.addEventListener('click', () => {
    const closeClickedDate = new Date().getDate();
    localStorage.setItem('closeClickedDate', JSON.stringify(closeClickedDate)); // js 객체 > json 형으로 변환
    closeFor24Hours = true;
    closeModal();
  });

  // 페이지 로드 시 모달 초기화 함수 실행
  window.addEventListener('load', () => {
    const now = new Date().getDate();
    const closeDateFromStorage = JSON.parse(
      localStorage.getItem('closeClickedDate')
    );

    if (now !== Number(closeDateFromStorage)) {
      closeFor24Hours = false;
    } else {
      closeFor24Hours = true;
    }

    if (closeFor24Hours) {
      closeModal();
    } else {
      openModal();
    }
  });
}
