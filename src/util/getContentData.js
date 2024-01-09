import { crud } from '/src/util/crud';

async function getContentData(collection) {
  const response = await crud.get(
    `${import.meta.env.VITE_PB_API}/collections/${collection}/records`
  );

  return response.data.items;
}

async function getContentDataByRank(collection) {
  const response = await crud.get(
    `${import.meta.env.VITE_PB_API}/collections/${collection}/records?sort=rank`
  );

  return response.data.items;
}

export { getContentData, getContentDataByRank };
