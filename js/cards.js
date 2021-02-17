import {setOffer as offer} from './offer.js';

const template = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('.map-canvas');

function card () {

  const title = template.querySelector('.popup__title').textContent = offer.title;
  const address = template.querySelector('.popup__text--address').textContent = offer.address;
  const price = template.querySelector('.popup__text--price').textContent = offer.price + '₽/ночь';
  const type = template.querySelector('.popup__type').textContent = offer.type; // словари
  const capacity = template.querySelector('.popup__text--capacity').textContent = offer.rooms + 'комнаты для' + offer.guests + 'гостей';
  const time = template.querySelector('.popup__text--time').textContent = 'Заезд после' + offer.checkin + 'выезд до' + offer.checkout;
  const features = template.querySelector('.popup__features').textContent = offer.features;
  const description = template.querySelector('.popup__description').textContent = offer.description;
  const photos = template.querySelector('.popup__photo').src = offer.photos;
  const avatar = template.querySelector('.popup__avatar').src = offer.avatar;

}

card()
