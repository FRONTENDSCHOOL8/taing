import { getData } from '/src/util/crud';
import { getImageURL } from '/src/util/getImageURL';

const selectUserData = await getData('users', {
  filter: 'userId = "mnd-prince"',
}); // getData()로 데이터베이스의 'users' 컬렉션에서 'username'이 'kim'인 데이터를 가져온다.

console.log(selectUserData); // 가져온 데이터를 콘솔에 출력한다.

const profileNickname = selectUserData[0]['profile_1_nickname'];

console.log('프로필 닉네임: ' + profileNickname);

if (profileNickname !== '') {
  console.log('가져옴');
  const profileImage = getImageURL(selectUserData[0], 'profile_2');
  // getImageURL()로 가져온 데이터에서 'profile_1' 필드의 이미지 URL을 가져온다.
  // 객체 넣기..

  console.log(profileImage);
}

/* 
* 1. 파일업로드
- input type="file" 을 사용하여 파일을 업로드한다.
- ? ? ? ? ?
*/
// Input:File
// submit button file upload
// fetch
