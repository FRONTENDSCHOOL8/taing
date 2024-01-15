export default function userMenuModal() {
  const userMenuButton = document.querySelector('#userMenu-button');
  const userMenuModal = document.querySelector('#user-menu');

  userMenuButton.addEventListener('click', () => {
    userMenuModal.classList.toggle('block');
    userMenuModal.classList.toggle('hidden');
  });
}
