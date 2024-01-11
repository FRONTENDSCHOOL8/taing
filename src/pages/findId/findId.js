import { getData } from '/src/util/crud';

const inputEmail = document.querySelector('#email');
const findIdButton = document.querySelector('.findIdButton');
// const emailForm = document.querySelector('form');
const emailErrorNotice = document.querySelector('.notice');

inputEmail.addEventListener('input', validationEmail);
findIdButton.addEventListener('click', findId);

async function findId() {
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
  } else {
    emailErrorNotice.classList.remove('hidden');
    emailErrorNotice.classList.add('block');
  }
}
