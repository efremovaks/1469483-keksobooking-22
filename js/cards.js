// import {createCollection} from './create-collection.js';

// словарь типов жилья
const typeOptions = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const template = document.querySelector('#card').content.querySelector('.popup');
// const mapCanvas = document.querySelector('#map-canvas');
// const offerList = createCollection(10);


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
    img.width = 45;
    img.height = 40;
    container.appendChild(img);
  });
}

function checkValue (field, value, method = 'textContent') {
  if (value) {
    field[method] = value;
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
  checkValue(cardTemplate.querySelector('.popup__type'), typeOptions[data.offer.type]);
  checkValue(cardTemplate.querySelector('.popup__text--capacity'), data.offer.rooms + ' комнат для ' + data.offer.guests + ' гостей');
  checkValue(cardTemplate.querySelector('.popup__text--time'),'Заезд после ' + data.offer.checkin + ' выезд до ' + data.offer.checkout);
  getFeatures(cardTemplate.querySelector('.popup__features'), data.offer.features);
  checkValue(cardTemplate.querySelector('.popup__description'), data.offer.description);
  getPhotos(cardTemplate.querySelector('.popup__photos'), data.offer.photos);
  checkValue(cardTemplate.querySelector('.popup__avatar'), data.author.avatar, 'src');

  return cardTemplate;
}

// собирает карточку, заполняются поля card() из данных offerList
// function renderCard(container, index) {
//   const fragment = document.createDocumentFragment();
//   const сard = getCard(offerList[index]);
//   fragment.appendChild(сard);
//   container.appendChild(fragment);
// }

// renderCard(mapCanvas, 1);

export {getCard};
