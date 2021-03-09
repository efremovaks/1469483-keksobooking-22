import {reRenderMarkers} from './map.js';


function addFilterListener(offers, filterType) {
  filterType.addEventListener('change', function () {

    // создаем коллекцию подходящих элементов
    if (filterType.value === 'any') {
      reRenderMarkers(offers);
    } else {
      const filteredOffers = offers.filter((item) => item.offer.type === filterType.value);

      const filteredPrice = offers.filter((item) => item.offer.price === filterType.value);
      console.log('фильтр - значение ', filterType.value)
      console.log('цена ', filteredPrice)
      reRenderMarkers(filteredOffers);
    }

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
