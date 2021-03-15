function getData(url, onSuccess, error) {
  fetch(url)
    .then((response) => response.json())
    .then(data => onSuccess(data))
    .catch(error);
}


function toSend(url, data, onSuccess, error) {
  fetch(
    url, {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(response);
      } else {
        error;
      }
    })
    .catch(error);
}


export {
  getData,
  toSend
};
