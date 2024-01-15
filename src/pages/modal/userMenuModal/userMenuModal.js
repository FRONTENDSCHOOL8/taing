export default function userMenuModal() {
  const userMenuButton = document.querySelector('#userMenu-button');
  const userMenuModal = document.querySelector('#user-menu');
  const logoutButton = document.querySelector('#logoutButton');
  const logoutModal = document.querySelector('#logoutModal');

  userMenuButton.addEventListener('click', () => {
    userMenuModal.classList.toggle('block');
    userMenuModal.classList.toggle('hidden');
  });

  logoutButton.addEventListener('click', () => {
    logoutModal.classList.remove('hidden');
    logoutModal.classList.add('block');
  });
}
