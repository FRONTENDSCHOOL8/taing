import getAuthDataFromPb from '/src/util/getAuthDataFromPb';
import { postData } from '/src/util/crud';

const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const userId = document.querySelector('#user-id');
const password = document.querySelector('#password');
const checkbox = document.querySelectorAll('.essential');

console.log(checkbox);
const passwordInput = document.querySelector('#password');

const passwardValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const emailValue = emailInput.value;
  const userIdValue = userId.value;
  const passwordValue = password.value;
  let isChecked = true;

  checkbox.forEach((item) => {
    if (!item.checked) {
      isChecked = false;
    }
  });

  console.log(isChecked);
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  // if(emailValidation==emailValue&&passwardValidation==passwordValue&&)

  //postData('users', data);
});

// emailInput.addEventListener('input', validationEmail)
// passwordInput.addEventListener('input',validationPassword)

// function validationEmail() {
//   const emailValue = inputEmail.value;

//   if (regexEmail.test(emailValue) || emailValue === '') {
//     emailErrorNotice.classList.remove('block');
//     emailErrorNotice.classList.add('hidden');
//   } else {
//     emailErrorNotice.classList.remove('hidden');
//     emailErrorNotice.classList.add('block');
//   }
// }

// function validationPassword() {
//   const regexPassword = /^(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//   const PasswordValue = inputEmail.value;

//   if (regexEmail.test(PasswordValue) || PasswordValue === '') {
//     passwordErrorNotice.classList.remove('block');
//     passwordErrorNotice.classList.add('hidden');

//   } else {
//     passwordErrorNotice.classList.remove('hidden');
//     passwordErrorNotice.classList.add('block');

//   }
// }

// - 데이터 통신을 통해 유저를 생성하고 관리해주세요
// - 유저의 회원을 탈퇴할 수 있는 기능을 구현해주세요
// - 로그인된 유저를 인식하여 UI를 다르게 랜더링해주세요
// - 로그인되지 않은 사용자면 회원가입 페이지로 리디렉션 시켜주세요
// - 회원가입시 중복된 유저가 있는지 체크해주세요

const allAgreeCheckbox = document.getElementById('allAgreeCheckbox');
const individualCheckboxes = document.querySelectorAll(
  'input[type="checkbox"]:not(#allAgreeCheckbox)'
);

allAgreeCheckbox.addEventListener('change', function () {
  individualCheckboxes.forEach((checkbox) => {
    checkbox.checked = allAgreeCheckbox.checked;
  });
});

// 하위 체크박스 상태에 따라 전체 동의 체크박스 변경
individualCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    allAgreeCheckbox.checked = Array.from(individualCheckboxes).every(
      (checkbox) => checkbox.checked
    );
  });
});
