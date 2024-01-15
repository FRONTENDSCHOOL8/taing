import { pb } from '/src/api/pocketBase';

export default async function getAuthDataFromPb(
  collectionName,
  email,
  password
) {
  if (
    typeof collectionName !== 'string' ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    throw new Error('모든 인자는 문자열이어야 합니다.');
  }

  const record = await pb
    .collection(collectionName)
    .authWithPassword(email, password);

  return record;
}
