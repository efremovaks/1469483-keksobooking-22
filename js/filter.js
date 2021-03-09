import {reRenderMarkers} from './map.js';




function addFilterListener(offers, filterType) {
  filterType.addEventListener('change', function () {

    // создаем коллекцию подходящих элементов
    if (filterType.value === 'any') {
      reRenderMarkers(offers);
    } else {
      const filteredOffers = offers.filter((item) => item.offer.type === filterType.value);
      console.log(filteredOffers)
      reRenderMarkers(filteredOffers);
    }

    if (filterType.value === 'any') {
      reRenderMarkers(offers);
    } else {
      const filteredOffers = offers.filter((item) => item.offer.price === filterType.value);
      console.log(filteredOffers)
      reRenderMarkers(filteredOffers);
    }
  });
}

export {
  addFilterListener
}
