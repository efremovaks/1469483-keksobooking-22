const typeMinPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const form = document.querySelector('.ad-form');
const priceFormInput = form.querySelector('#price');
const typeForm = form.querySelector('#type');
const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');


function setMinPrice() {
  //значения по умолчанию
  priceFormInput.placeholder = typeMinPrice[typeForm.value]; // проставляет значение в поле Цена за ночь в зависимости от типа жилья
  priceFormInput.min = typeMinPrice[typeForm.value]; // ограничивает минимальное значение priceFormInput в соответствии с typeMinPrice
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
