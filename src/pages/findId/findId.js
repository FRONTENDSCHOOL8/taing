import { getData } from '/src/util/crud';

const inputEmail = document.querySelector('#email');
const emailForm = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');
const emailErrorNotice = document.querySelector('.notice');

inputEmail.addEventListener('input', validationEmail);
emailForm.addEventListener('submit', findId);

async function findId(e) {
  e.preventDefault();

  const emailValue = inputEmail.value;

  try {
    const res = await getData('users', {
      filter: `email='${emailValue}'`,
    });

    console.log(res);

    if (res.length > 0) {
      alert(`아이디는 ${res[0].userId} 입니다.`);
      location.href = '/src/pages/login/';
    } else {
      alert('일치하는 이메일이 없습니다.');
    }
  } catch (error) {
    console.error(error);
  }
}

function validationEmail() {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailValue = inputEmail.value;

  if (regexEmail.test(emailValue) || emailValue === '') {
    emailErrorNotice.classList.remove('block');
    emailErrorNotice.classList.add('hidden');
    submitButton.classList.remove('bg-button-submit-default');
    submitButton.classList.add('bg-button-submit-active');
  } else {
    emailErrorNotice.classList.remove('hidden');
    emailErrorNotice.classList.add('block');
    submitButton.classList.remove('bg-button-submit-active');
    submitButton.classList.add('bg-button-submit-default');
  }
}
