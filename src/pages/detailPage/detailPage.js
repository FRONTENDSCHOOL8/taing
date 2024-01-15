import { getData } from '/src/util/crud';
import { getImageURL } from '/src/util/getImageURL';
import { insertTemplate } from '/src/util/insertTemplate';

const params = new URLSearchParams(window.location.search);

const detailData = await getData(params.get('collectionName'), {
  filter: `id='${params.get('id')}'`,
});

const template = /* html */ `
  <div>
  <h2 class="my-16pxr text-center text-32pxr">${detailData[0].name}</h2>
    <img src="${getImageURL(detailData[0])}" alt="${
      detailData[0].name
    }" class="mx-auto border border-white" />
  </div>
`;

insertTemplate('main', template);
