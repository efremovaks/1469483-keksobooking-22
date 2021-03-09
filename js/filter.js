import {reRenderMarkers} from './map.js';

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


function addFilterListener(offers, filterType) {
  filterType.addEventListener('change', function () {

    // создаем коллекцию подходящих элементов
    if (filterType.value === 'any') {
      reRenderMarkers(offers);
      return
    }

    const filteredOffers = offers.filter((item) => item.offer.type === filterType.value);
    reRenderMarkers(filteredOffers);

    if (PriceRange == filterType.value) {
      console.log(PriceRange)

    }

    const filteredPrice = offers.filter((item) => item.offer.price === filterType.value);
    console.log('фильтр - значение ', filterType.value)
    console.log('цена ', filteredPrice)



    // if (filterType.value === 'any') {
    //   reRenderMarkers(offers);
    // } else {
    //   const filteredPrice = offers.filter((item) => item.offer.price === filterType.value);
    //   console.log(filterType.value)
    //   console.log(filteredPrice)
    //   reRenderMarkers(filteredPrice);
    // }
  });
}

export {
  addFilterListener
}
