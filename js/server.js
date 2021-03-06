import {renderModal, toDefaultForm} from './form.js';



function getData(url, onSuccess, onError) {
  fetch(url)
    .then((response) => response.json())
    .then(data => onSuccess(data))
    .catch(() => onError())
}


function toSend(data) {
  fetch(
    'https://22.javascript.pages.academy/keksobooking', {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        renderModal('success');
        toDefaultForm();
      } else {
        renderModal('error');
      }
    })
    .catch(() => {
      renderModal('error');
    });
}

export {
  getData,
  toSend
};
