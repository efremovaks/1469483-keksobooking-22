'use strict';

const PHOTO_WIGTH = 45;
const PHOTO_HEIGHT = 40;

// словарь типов жилья
const TypeOptions = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const template = document.querySelector('#card').content.querySelector('.popup');


// создает и добавляет в разметку элементы списка приемуществ
function getFeatures(container, featureList) {
  container.innerHTML = '';

  featureList.forEach(element => {
    const li = document.createElement('li');
    li.classList.add('popup__feature', 'popup__feature--' + element);
    container.appendChild(li);
  });
}

// создает и добавляет в разметку тег с картинкой
function getPhotos(container, photosList) {
  container.innerHTML = '';

  photosList.forEach(element => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = element;
    img.alt = 'Фотография жилья';
    img.width = PHOTO_WIGTH;
    img.height = PHOTO_HEIGHT;
    container.appendChild(img);
  });
}

function checkValue(field, value, propName = 'textContent') {
  if (value) {
    field[propName] = value;
  } else {
    field.style.display = 'none';
  }
}

// создание клонов полей карточки
function getCard(data) {
  const cardTemplate = template.cloneNode(true);

  checkValue(cardTemplate.querySelector('.popup__title'), data.offer.title);
  checkValue(cardTemplate.querySelector('.popup__text--address'), data.offer.address);
  checkValue(cardTemplate.querySelector('.popup__text--price'), data.offer.price + '₽/ночь');
  checkValue(cardTemplate.querySelector('.popup__type'), TypeOptions[data.offer.type]);

  let capacity = '';
  if (data.offer.rooms && data.offer.guests) {
    capacity = data.offer.rooms + ' комнат для ' + data.offer.guests + ' гостей';
  }
  checkValue(cardTemplate.querySelector('.popup__text--capacity'), capacity);

  let time = '';
  if (data.offer.checkin && data.offer.checkout) {
    time = 'Заезд после ' + data.offer.checkin + ' выезд до ' + data.offer.checkout;
  }
  checkValue(cardTemplate.querySelector('.popup__text--time'), time);

  getFeatures(cardTemplate.querySelector('.popup__features'), data.offer.features);
  checkValue(cardTemplate.querySelector('.popup__description'), data.offer.description);
  getPhotos(cardTemplate.querySelector('.popup__photos'), data.offer.photos);
  checkValue(cardTemplate.querySelector('.popup__avatar'), data.author.avatar, 'src');

  return cardTemplate;
}

export {
  getCard
};
