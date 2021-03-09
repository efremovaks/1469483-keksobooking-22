import {
  reRenderMarkers
} from './map.js';

const PriceRange = {
  LOW: {
    MIN: 0,
    MAX: 10000,
  },
  MIDDLE: {
    MIN: 10000,
    MAX: 50000,
  },
  HIGH: {
    MIN: 50000,

  },
};


const mapForm = document.querySelector('.map__filters');
const houseType = mapForm.querySelector('#housing-type');
const housingPrice = mapForm.querySelector('#housing-price');


function addFilterListener(offers) {

  houseType.addEventListener('change', function () {

    // создаем коллекцию подходящих элементов
    if (houseType.value === 'any') {
      reRenderMarkers(offers);
      return
    }
    const filteredOffers = offers.filter((item) => item.offer.type === houseType.value);
    reRenderMarkers(filteredOffers);
  });

  housingPrice.addEventListener('change', function () {
    if (housingPrice.value === 'low') {
      const filteredPrice = offers.filter((item) => item.offer.price <= PriceRange.LOW.MAX);
      reRenderMarkers(filteredPrice);
    } else if (housingPrice.value === 'middle') {
      const filteredPrice = offers.filter((item) => item.offer.price > PriceRange.MIDDLE.MIN && item.offer.price < PriceRange.MIDDLE.MAX);
      reRenderMarkers(filteredPrice);
    } else if ((housingPrice.value === 'high')) {
      const filteredPrice = offers.filter((item) => item.offer.price > PriceRange.HIGH.MIN);
      reRenderMarkers(filteredPrice);
    } else {
      reRenderMarkers(offers);
    }
  })
}

export {
  addFilterListener
}
