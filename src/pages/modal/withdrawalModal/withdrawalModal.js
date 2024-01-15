import { pb } from '/src/api/pocketBase';
import { deleteData } from '/src/util/crud';

export default async function withdrawalModal() {
  const modalContainer = document.querySelector('#withdrawalModal');
  const confirmButton = document.querySelector('.confirm-button');
  const cancelButton = document.querySelector('.cancel-button');

  // 모달 창 닫기
  function closeModal() {
    modalContainer.classList.add('hidden');
  }
  // 확인 버튼 클릭 시 회원 탈퇴
  async function confirmLogout() {
    const auth = await JSON.parse(localStorage.getItem('auth'));
    await deleteData('users', auth.model.id);
    pb.authStore.clear();
    localStorage.removeItem('auth');
    closeModal();
    window.location.href = '/index.html';
  }

  confirmButton.addEventListener('click', confirmLogout);
  cancelButton.addEventListener('click', closeModal);
}
