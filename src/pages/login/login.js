import getAuthDataFromPb from '/src/util/getAuthDataFromPb';

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async (e) => {
  try {
    e.preventDefault(); // 폼 기본 동작 방지

    // 입력값 가져오기
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (!username || !password) {
      alert('아이디 또는 비밀번호를 입력해주세요.');
      return;
    } else {
      await getAuthDataFromPb('users', username, password);

      const userData = await JSON.parse(
        localStorage.getItem('pocketbase_auth')
      );

      localStorage.setItem(
        'auth',
        JSON.stringify({
          isAuth: !!userData.token,
          model: userData.model,
          token: userData.token,
        })
      );

      location.href = '/src/pages/mainPage/';
    }
  } catch (error) {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    console.error(error);
  }
});
