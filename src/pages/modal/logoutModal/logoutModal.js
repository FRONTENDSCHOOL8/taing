import { pb } from '/src/api/pocketBase';

export default async function logoutModal() {
  // 로그아웃 버튼을 누르면 모달창 실행
  // 확인 버튼 - 로그아웃
  // 취소 버튼 - 모달창 닫음
  const modalContainer = document.querySelector('#logoutModal');
  const confirmButton = document.querySelector('.confirm-button');
  const cancelButton = document.querySelector('.cancel-button');

  // 모달 창 닫기
  function closeModal() {
    modalContainer.classList.add('hidden');
  }

  // 확인 버튼 클릭 시 로그아웃
  function confirmLogout() {
    closeModal();
    pb.authStore.clear();
    localStorage.removeItem('auth');
    window.location.href = '/src/pages/landingPage/index.html';
  }

  // 버튼 클릭 이벤트 처리
  confirmButton.addEventListener('click', confirmLogout);
  cancelButton.addEventListener('click', closeModal);

  // 모달 창 외부를 클릭하면 모달 닫기 (선택 사항)
  // document
  //   .getElementById('myModal')
  //   .addEventListener('click', function (event) {
  //     if (event.target === this) {
  //       closeModal();
  //     }
  //   });

  // Esc 키를 눌렀을 때 모달 닫기 (선택 사항)
  // document.addEventListener('keydown', function (event) {
  //   if (event.key === 'Escape') {
  //     closeModal();
  //   }
  // });
}
