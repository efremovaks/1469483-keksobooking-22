import {toSend} from './server.js';

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


form.addEventListener('submit', function (evt){
  evt.preventDefault();

  const formData = new FormData(evt.target);
  toSend(formData);

});


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
    return;
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
roomNumber.value = capacity.value;

roomNumber.addEventListener('change', function () {
  if (roomNumber.value != 100) {
    capacity.value = roomNumber.value;
  } else {
    capacity.value = 0;
  }
});

capacity.addEventListener('change', function () {
  if (capacity.value != 0) {
    roomNumber.value = capacity.value;
  } else {
    roomNumber.value = 100;
  }
});
