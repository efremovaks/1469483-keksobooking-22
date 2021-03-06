import {renderToMap} from './map.js';
import {showAlert} from './util.js';
import {renderModal, toDefaultForm} from './form.js';
import {addFilterListener} from './filter.js';


let offers = [];

function getData() {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then(
      (data) => {
        offers = data.slice(0, 10);
        renderToMap(offers);
        addFilterListener(offers);
      },
    )
    .catch(() => {
      showAlert('При загрузке данных с сервера произошла ошибка. Попробуйте ещё раз');
    });
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
