'use strict';

import './form.js';
import './map.js';

import {
  map,
  ZOOM,
  mapCenterCoords,
  renderToMap
} from './map.js';

import {
  showAlert
} from './util.js';

import {
  disableFilter,
  enableFilter,
  addFilterListener,
  MAX_COUNT
} from './filter.js';

import {
  getData,
  toSend
} from './server.js';

import {
  disableForm,
  enableForm,
  toDefaultForm
} from './form.js';

import {
  renderModal
} from './modal.js';

const GET_URL = 'https://22.javascript.pages.academy/keksobooking/data';
const POST_URL = 'https://22.javascript.pages.academy/keksobooking';

const form = document.querySelector('.ad-form');
const btnFormReset = form.querySelector('.ad-form__reset');

let offers = [];

// блокировка
disableFilter();
disableForm();


// разблокировка / загрузка
map
  .on('load', function () {
    enableFilter();
    enableForm();
    getData(
      GET_URL,
      ((data) => {
        offers = data.slice(0, MAX_COUNT);
        renderToMap(offers);
        addFilterListener(data);

        toDefaultForm(offers);
      }),
      (() => {
        showAlert('При загрузке данных с сервера произошла ошибка. Попробуйте ещё раз');
      }),
    );
  })

  // координаты центровки карты и зум
  .setView({
    lat: mapCenterCoords.lat,
    lng: mapCenterCoords.lng,
  }, ZOOM);

// отправка данных на сервер
form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  toSend(POST_URL,
    formData,
    () => {
      renderModal('success');
      toDefaultForm(offers);
    },
    () => renderModal('error'));
});

// сброс формы по кнопке сброса
btnFormReset.addEventListener('click', function (evt) {
  evt.preventDefault();
  toDefaultForm(offers);
});
