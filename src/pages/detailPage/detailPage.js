import { getData } from '/src/util/crud';
import { getImageURL } from '/src/util/getImageURL';
import { insertTemplate } from '/src/util/insertTemplate';

const params = new URLSearchParams(window.location.search);

const detailData = await getData(params.get('collectionName'), {
  filter: `id='${params.get('id')}'`,
});

console.log(detailData);

const template = /* html */ `
  <div>
    <img src="${getImageURL(detailData[0])}" alt="${
      detailData[0].name
    }" class="mx-auto border border-white" />
    <h3 class="text-center text-24pxr mt-30pxr">${detailData[0].name}</h3>
  </div>
`;

insertTemplate('main', template);
