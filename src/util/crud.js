import { pb } from '/src/api/pocketbase';

// 데이터를 가져오는 함수
async function getData(collectionName, options = {}) {
  const response = await pb.collection(collectionName).getFullList({
    ...options,
  });

  return response;
}

// 데이터를 생성하는 함수
async function postData(collectionName, data) {
  await pb.collection(collectionName).create(data);
}

// 데이터를 수정하는 함수
async function patchData(collectionName, id, data) {
  await pb.collection(collectionName).update(id, data);
}

// 데이터를 삭제하는 함수
async function deleteData(collectionName, id) {
  await pb.collection(collectionName).delete(id);
}

export { getData, postData, patchData, deleteData };
