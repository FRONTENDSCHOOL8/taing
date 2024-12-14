import { getData } from '/src/util/crud';
import { pb } from '/src/api/pocketBase';

const inputUserId = document.querySelector('#userId');
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

inputUserId.addEventListener('input', (e) => {
  const input = e.target;

  if (input.value.length > 2) {
    submitButton.classList.remove('bg-button-submit-default');
    submitButton.classList.add('bg-button-submit-active');
  } else {
    submitButton.classList.remove('bg-button-submit-active');
    submitButton.classList.add('bg-button-submit-default');
  }
});

form.addEventListener('submit', findId);

/**
 * TODO: 함수는 입력값에 따라 츨력값이 정해지는 순수함수로 구성하는 것이 가장 좋습니다.
 * @param e
 * @returns {Promise<void>}
 */
async function findId(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const { userId } = Object.fromEntries(formData.entries());

  try {
    const res = await getData('users', {
      filter: `username='${userId}'`,
    });

    if (res.length > 0) {
      console.log(res[0].email);
      await pb.collection('users').requestPasswordReset(res[0].email);

      alert(`${res[0].email}메일로 비밀번호 재설정 링크를 발송했습니다.`);
      location.href = '/src/pages/login/';
    } else {
      alert('일치하는 아이디가 없습니다.');
    }
  } catch (error) {
    console.error(error);
  }
}
