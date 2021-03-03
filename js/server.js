import {renderToMap} from './map.js';

function getData() {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      return renderToMap(data);
    })
}


function toSend(data) {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: data,
    },
  );
}

export {getData, toSend};
