import { getData } from '/src/util/crud';

const inputEmail = document.querySelector('#email');
const emailForm = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');
const emailErrorNotice = document.querySelector('.notice');

inputEmail.addEventListener('input', validateEmail);
emailForm.addEventListener('submit', findId);

/**
 * TODO: 거의 다 왔습니다!. 외부에서 input 의 참조를 조달하기 보다는 폼의 이벤트에서 깂을 꺼내면 더 완벽하겠습니다!
 * @param e
 * @returns {Promise<void>}
 */
async function findId(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const { email } = Object.fromEntries(formData.entries());

  try {
    const res = await getData('users', {
      filter: `email='${email}'`,
    });

    if (res.length > 0) {
      alert(`아이디는 ${res[0].username} 입니다.`);
      location.href = '/src/pages/login/';
    } else {
      alert('일치하는 이메일이 없습니다.');
    }
  } catch (error) {
    console.error(error);
  }
}

const isValidEmail = (emailValue) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regexEmail.test(emailValue) || emailValue === '';
};

/**
 * TODO: 하나의 함수가 세가지 일을 하고 있군요.
 * 1. 이메일 벨리데이션
 * 2. 벨리데이션이 실패했을 때의 화면 처리
 * 3. 벨리데이션이 성공했을 때의 화면 처리
 * 적절하게 추상화해서 함수를 분리하는 것이 좋겠습니다.
 * 2와 3항목도 분리해 보시면 어떨까요?
 */
function validateEmail() {
  if (isValidEmail(inputEmail.value)) {
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
