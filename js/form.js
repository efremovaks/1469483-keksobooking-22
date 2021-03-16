import {
  mapCenterCoords,
  mainMarker,
  addressCoords,
  renderToMap
} from './map.js';


const TypeMinPrices = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const MAX_PRICE_VALUE = 1000000;

const form = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');
const priceFormInput = form.querySelector('#price');
const typeForm = form.querySelector('#type');
const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');


// очищает форму
function toDefaultForm(offers) {
  mapForm.reset();
  form.reset();
  renderToMap(offers);
  mainMarker.setLatLng(mapCenterCoords);
  addressCoords();
  setMinPrice();
  capacityRoom();
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
  priceFormInput.placeholder = TypeMinPrices[typeForm.value]; // проставляет значение в поле Цена за ночь в зависимости от типа жилья
}

setMinPrice();

typeForm.addEventListener('change', function () {
  setMinPrice();
});

// синхронизируем время въезда/выезда
function syncTime() {
  timein.value = timeout.value;
}

syncTime()

timein.addEventListener('change', function () {
  syncTime();
});

timeout.addEventListener('change', function () {
  syncTime();
});

// синхронизирует комнаты и гостей
function capacityRoom() {
  roomNumber.value = capacity.value;
}

capacityRoom();

function validateGuests() {
  const roomNumberValue = +roomNumber.value;
  const capacityValue = +capacity.value;

  if (roomNumberValue < capacityValue && capacityValue > roomNumberValue) {
    capacity.setCustomValidity('Гостей больше, чем комнат');
  } else if (capacityValue === 0 && roomNumberValue !== 100) {
    capacity.setCustomValidity('Нужно 100 комнат');
  } else if (roomNumberValue === 100 && capacityValue !== 0) {
    capacity.setCustomValidity('для кутежа, не для гостей');
  } else {
    capacity.setCustomValidity('');
  }
}

roomNumber.addEventListener('change', validateGuests);
capacity.addEventListener('change', validateGuests);


export {toDefaultForm};
