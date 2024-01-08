const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

async function crud(options) {
  try {
    const { url, ...customOptions } = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };
    const response = await fetch(url, customOptions);

    response.data = await response.json();

    return response;
  } catch (error) {
    console.error(error);
  }
}

crud.get = function (url, options) {
  return crud({
    url,
    ...options,
  });
};

crud.post = function (url, body, options) {
  return crud({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

crud.delete = function (url, options) {
  return crud({
    method: 'DELETE',
    url,
    ...options,
  });
};

crud.put = function (url, body, options) {
  return crud({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

export { crud };
