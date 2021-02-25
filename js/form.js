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
  const priceLength = price.value.length;

  if (priceLength > MAX_PRICE_VALUE) {
    price.setCustomValidity('Цена не должна превышать 1 000 000');
  } else {
    price.setCustomValidity('');
  }

  price.reportValidity();
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
