import { getData } from '/src/util/crud';

document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // 폼 기본 동작 방지

    // 입력값 가져오기
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 가져온 값 확인 (실제로는 서버에 전송하거나 다른 작업을 수행)
    console.log('Username:', username);
    console.log('Password:', password);
  });
