// import {setOffer as offer} from './offer.js';
import {createCollection} from './create-collection.js';

const template = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('.map-canvas');

function getCard(){
  const offerList = createCollection(1);
  return offerList
}

console.log(getCard());

function card (offer) {
  const cardTemplate = template.cloneNode(true);

  const title = cardTemplate.querySelector('.popup__title').textContent = offer.title;
  console.log('title', title);

  const address = cardTemplate.querySelector('.popup__text--address').textContent = offer.address;
  const price = cardTemplate.querySelector('.popup__text--price').textContent = offer.price + '₽/ночь';
  const type = cardTemplate.querySelector('.popup__type').textContent = offer.type; // словари
  const capacity = cardTemplate.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  const time = cardTemplate.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ' выезд до ' + offer.checkout;
  const features = cardTemplate.querySelector('.popup__features').textContent = offer.features;
  const description = cardTemplate.querySelector('.popup__description').textContent = offer.description;
  const photos = cardTemplate.querySelector('.popup__photo').src = offer.photos;
  const avatar = cardTemplate.querySelector('.popup__avatar').src = offer.avatar;

  return cardTemplate
}

console.log(card(getCard()));

// mapCanvas.appendChild(card());

// export {card}
