import { postData, getData } from '/src/util/crud';
import { getImageURL } from '/src/util/getImageURL';

const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const userId = document.querySelector('#user-id');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const checkbox = document.querySelectorAll('.essential');
const submitButton = document.querySelector('#submit-button');

const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordValidation =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

form.addEventListener('submit', duplicateData);

async function duplicateData(e) {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const emailValue = emailInput.value;
    const userIdValue = userId.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    let passEmail = false;
    let passPassword = false;
    let passChecked = true;

    passEmail = emailValidation.test(emailValue);
    passPassword = passwordValidation.test(passwordValue);

    checkbox.forEach((item) => {
      if (!item.checked) {
        passChecked = false;
      }
    });

    const defaultData = await getData('default_data');
    const profileImage = getImageURL(defaultData[0], 'default_profile');

    console.log(profileImage);
    console.log(defaultData[0]['default_profile_nickname']);

    await fetch(profileImage)
      .then((res) => res.blob())
      .then((blob) => {
        formData.append('profile_1', blob, 'default_profile');
      });

    formData.append(
      'profile_1_nickname',
      defaultData[0]['default_profile_nickname']
    );

    const data = {
      username: formData.get('user-id'),
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirm: formData.get('confirm-password'),
      profile_1: formData.get('profile_1'),
      profile_1_nickname: formData.get('profile_1_nickname'),
    };

    console.log(data);

    const res = await getData('users', {
      filter: `email='${emailValue}' || username='${userIdValue}'`,
    });

    if (!passEmail || !passPassword) {
      alert('이메일이나 비밀번호 형식이 올바르지 않습니다.');
    } else if (confirmPasswordValue !== passwordValue) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if (res.length > 0) {
      alert(`존재하는 이메일 또는 아이디 입니다.`);
    } else if (!passChecked) {
      alert('필수 약관에 동의해주세요.');
    } else {
      const record = await postData('users', data);
      console.log(record);
      alert('회원가입이 완료되었습니다.');
      location.href = '/src/pages/login/';
    }
  } catch (error) {
    console.error(error);
  }
}

const allAgreeCheckbox = document.querySelector('#allAgreeCheckbox');
const individualCheckboxes = document.querySelectorAll(
  'input[type="checkbox"]:not(#allAgreeCheckbox)'
);

const marketingCheckbox = document.querySelector('#marketingCheckbox');
const marketingSmsCheckbox = document.querySelector('#marketingSmsCheckbox');
const marketingEmailCheckbox = document.querySelector(
  '#marketingEmailCheckbox'
);

marketingCheckbox.addEventListener('change', () => {
  marketingSmsCheckbox.checked = marketingCheckbox.checked;
  marketingEmailCheckbox.checked = marketingCheckbox.checked;
});

allAgreeCheckbox.addEventListener('change', () => {
  individualCheckboxes.forEach((checkbox) => {
    checkbox.checked = allAgreeCheckbox.checked;
  });
});

// 하위 체크박스 상태에 따라 전체 동의 체크박스 변경
individualCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    allAgreeCheckbox.checked = Array.from(individualCheckboxes).every(
      (checkbox) => checkbox.checked
    );
  });
});
