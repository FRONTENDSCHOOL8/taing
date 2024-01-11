import { getData } from '/src/util/crud';

const inputUserId = document.querySelector('#userId');
const findIdButton = document.querySelector('.findIdButton');

// inputUserId.addEventListener('input', validationEmail);
findIdButton.addEventListener('click', findId);

async function findId() {
  const userIdValue = inputUserId.value;

  try {
    const res = await getData('users', {
      filter: `userId='${userIdValue}'`,
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

// function validationEmail() {
//   const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const emailValue = inputUserId.value;

//   if (regexEmail.test(emailValue) || emailValue === '') {
//     emailErrorNotice.classList.remove('block');
//     emailErrorNotice.classList.add('hidden');
//   } else {
//     emailErrorNotice.classList.remove('hidden');
//     emailErrorNotice.classList.add('block');
//   }
// }
