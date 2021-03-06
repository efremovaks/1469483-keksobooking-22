import {reRenderMarkers} from './map.js';


const mapForm = document.querySelector('.map__filters');
const houseType = mapForm.querySelector('#housing-type');

function addFilterListener(offers) {
  houseType.addEventListener('change', function () {

    // создаем коллекцию подходящих элементов
    if (houseType.value === 'any') {
      reRenderMarkers(offers);
    } else {
      const filteredOffers = offers.filter((item) => item.offer.type === houseType.value);
      reRenderMarkers(filteredOffers);
    }
  });
}

export {
  addFilterListener
}
