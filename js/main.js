import './form.js';
import './map.js';
import {renderToMap} from './map.js';
import {showAlert} from './util.js';
import {addFilterListener} from './filter.js';
import {getData} from './server.js';


getData(
  'https://22.javascript.pages.academy/keksobooking/data',
  ((offers) => {
    renderToMap(offers);
    addFilterListener(offers);
  }),
  (() => {showAlert('При загрузке данных с сервера произошла ошибка. Попробуйте ещё раз');}),
)
