import { insertTemplate } from '/src/util/insertTemplate';
import { getImageURL } from '/src/util/getImageURL';
// import getAuthDataFromPb from '/src/util/getAuthDataFromPb';

export default async function header() {
  // const userData = await getAuthDataFromPb(
  //   'users',
  //   'email@email.com',
  //   'qwert12345!'
  // );

  // localStorage.setItem(
  //   'auth',
  //   JSON.stringify({
  //     isAuth: !!userData.token,
  //     username: userData.record.username,
  //   })
  // );

  // console.log(userData);

  if (!localStorage.getItem('auth')) {
    return;
  } else {
    const { isAuth, username } = await JSON.parse(localStorage.getItem('auth'));

    const template = /* html */ `
      <div>
        <span class="text-white">${username}</span>
      </div>
    `;

    if (isAuth) {
      insertTemplate('#header-wrapper', template);
    } else {
      return;
    }
  }
}
