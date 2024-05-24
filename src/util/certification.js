import { pb } from '/src/api/pocketBase';
import { getData } from '/src/util/crud';

async function emailVisibility(username) {
  const record = await getData('users', {
    filter: `username='${username}'`,
  });

  console.log(record[0]);

  return pb.collection('users').update(record[0].id, {
    emailVisibility: true,
  });
}

export { emailVisibility };
