import {toSend} from './server.js';
import {mapCenterCoords} from './map.js';
import {mainMarker} from './map.js';
import {addressCoords} from './map.js';

const typeMinPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const MAX_PRICE_VALUE = 1000000;

const form = document.querySelector('.ad-form');
const priceFormInput = form.querySelector('#price');
const typeForm = form.querySelector('#type');
const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const btnFormReset = form.querySelector('.ad-form__reset');

// очищает форму
function toDefaultForm() {
  form.reset();
  mainMarker.setLatLng(mapCenterCoords);
  addressCoords();
  setMinPrice();
  capacityRoom();
}

// сообщение про успешную отправку
function onSuccess() {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const mainHtml = document.querySelector('main');
  const successMessage = successTemplate.cloneNode(true);
  mainHtml.appendChild(successMessage);

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      successMessage.remove();
    }
  });

  document.addEventListener('click', function () {
    successMessage.remove();
  });
}

// сброс формы по кнопке сброса
btnFormReset.addEventListener('click', function (evt) {
  evt.preventDefault();
  toDefaultForm();
});

// отпарвка данных на сервер
form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  toSend(formData);
});

// сообщение о неудачной отправке
function onFailed() {
  const failedTemplate = document.querySelector('#error').content.querySelector('.error');
  const mainHtml = document.querySelector('main');
  const failedMessage = failedTemplate.cloneNode(true);
  mainHtml.appendChild(failedMessage);

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      failedMessage.remove();
    }
  });

  document.addEventListener('click', function () {
    failedMessage.remove();
  });
}

// валидация полей формы
title.addEventListener('invalid', function () {
  if (title.validity.tooShort) {
    title.setCustomValidity('Имя должно состоять минимум из 30 символов');
  } else if (title.validity.tooLong) {
    title.setCustomValidity('Имя не должно превышать 100 символов');
  } else if (title.validity.valueMissing) {
    title.setCustomValidity('Обязательное поле');
  } else {
    title.setCustomValidity('');
  }
});


price.addEventListener('input', function () {
  const priceValue = price.value.length;

  if (priceValue > MAX_PRICE_VALUE) {
    price.setCustomValidity('Цена не должна превышать 1 000 000');
    return;
  }

  if (priceValue < 0) {
    price.setCustomValidity('Цена не должна быть отрицательной');
  }
});

function setMinPrice() {
  //значения по умолчанию
  priceFormInput.placeholder = typeMinPrice[typeForm.value]; // проставляет значение в поле Цена за ночь в зависимости от типа жилья
  // priceFormInput.min = typeMinPrice[typeForm.value]; // ограничивает минимальное значение priceFormInput в соответствии с typeMinPrice
}

setMinPrice();

typeForm.addEventListener('change', function () {
  setMinPrice();
});


// синхронизируем время въезда/выезда
timein.value = timeout.value;

timein.addEventListener('change', function () {
  timeout.value = timein.value;
});

timeout.addEventListener('change', function () {
  timein.value = timeout.value;
});

// синхронизирует комнаты и гостей
function capacityRoom() {
  roomNumber.value = capacity.value;

  roomNumber.addEventListener('change', function () {
    if (+roomNumber.value !== 100) {
      capacity.value = roomNumber.value;
    } else {
      capacity.value = 0;
    }
  });

  capacity.addEventListener('change', function () {
    if (+capacity.value !== 0) {
      roomNumber.value = capacity.value;
    } else {
      roomNumber.value = 100;
    }
  });
}

capacityRoom();

export {onFailed, onSuccess, toDefaultForm};
