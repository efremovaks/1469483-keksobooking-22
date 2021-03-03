import {
  renderToMap
} from './map.js';
import {
  showAlert
} from './util.js';
import {
  onFailed
} from './form.js';

function getData() {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      return renderToMap(data);
    })
    .catch(() => {
      showAlert('При загрузке данных с сервера произошла ошибка. Попробуйте ещё раз');
    });
}


function toSend(data) {
  fetch(
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: data,
      },
    )
    .then((response) => response.data())
    .catch(() => {
      onFailed();
    })
}

export {
  getData,
  toSend
};
