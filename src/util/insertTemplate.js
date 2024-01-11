function insertTemplate(target, template) {
  if (typeof target !== 'string')
    throw new Error('target은 문자열이어야 합니다.');

  const targetElement = document.querySelector(target);

  if (!targetElement) throw new Error('target이 존재하지 않습니다.');

  targetElement.insertAdjacentHTML('beforeend', template);
}

export { insertTemplate };
