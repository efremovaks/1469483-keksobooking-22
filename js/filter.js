const MapFilters = {
  HOUSE_TYPE: [
    'any',
    'palace',
    'flat',
    'house',
    'bungalow',
  ],
}

const mapForm = document.querySelector('.map__filters');
const houseType = mapForm.querySelector('#housing-type');

// typeHouses - приходит с сервера
// housingType - варианты по фильтру

function addFilterListener(offers) {


  houseType.addEventListener('change', function () {

    offers.forEach((item) => {
      const typeHouses = item.offer.type;

      if (typeHouses == houseType.value) {
        const newOffers = [houseType.value];

        console.log(newOffers)
        return newOffers;
      }
    });

  })
}

export {
  addFilterListener
}
