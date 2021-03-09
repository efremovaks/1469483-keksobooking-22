// import './offer.js';
// import {createCollection} from './create-collection.js';
// import './create-collection.js';
// import './cards.js';
import './form.js';
import './map.js';
import {renderToMap} from './map.js';
import {showAlert} from './util.js';
import {addFilterListener} from './filter.js';
import {getData} from './server.js';

const mapForm = document.querySelector('.map__filters');
const houseType = mapForm.querySelector('#housing-type');
const housingPrice = mapForm.querySelector('#housing-price');

let offers = [];

// function getData() {
//   fetch('https://22.javascript.pages.academy/keksobooking/data')
//     .then((response) => response.json())
//     .then(
//       (data) => {
//         offers = data.slice(0, 10);
//         renderToMap(offers);
//         addFilterListener(offers);
//       },
//     )
//     .catch(() => {
//       showAlert('При загрузке данных с сервера произошла ошибка. Попробуйте ещё раз');
//     });
// }

getData(
  'https://22.javascript.pages.academy/keksobooking/data',
  ((data) => {
    offers = data.slice(0, 10);
    renderToMap(offers);
    addFilterListener(offers, houseType);
    addFilterListener(offers, housingPrice);
  }),
  (() => {showAlert('При загрузке данных с сервера произошла ошибка. Попробуйте ещё раз');}),
)
