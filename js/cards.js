import {createCollection} from './create-collection.js';

// словарь типов жилья
const typeOptions = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const template = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
const offerList = createCollection(10);


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

// создание клонов полей карточки
function getCard(data) {
  const cardTemplate = template.cloneNode(true);

  cardTemplate.querySelector('.popup__title').textContent = data.offer.title;
  cardTemplate.querySelector('.popup__text--address').textContent = data.offer.address;
  cardTemplate.querySelector('.popup__text--price').textContent = data.offer.price + '₽/ночь';
  cardTemplate.querySelector('.popup__type').textContent = typeOptions[data.offer.type];
  cardTemplate.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' комнат для ' + data.offer.guests + ' гостей';
  cardTemplate.querySelector('.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin + ' выезд до ' + data.offer.checkout;
  getFeatures(cardTemplate.querySelector('.popup__features'), data.offer.features);
  cardTemplate.querySelector('.popup__description').textContent = data.offer.description;
  getPhotos(cardTemplate.querySelector('.popup__photos'), data.offer.photos);
  cardTemplate.querySelector('.popup__avatar').src = data.author.avatar;

  return cardTemplate;
}

// собирает карточку, заполняются поля card() из данных offerList
function renderCard(container, index) {
  const fragment = document.createDocumentFragment();
  const сard = getCard(offerList[index]);
  fragment.appendChild(сard);
  container.appendChild(fragment);
}

renderCard(mapCanvas, 1);
