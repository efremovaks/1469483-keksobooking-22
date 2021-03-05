
const mapForm = document.querySelector('.map__filters');
const houseType = mapForm.querySelector('#housing-type');

// typeHouses - приходит с сервера
// housingType - варианты по фильтру

function addFilterListener(offers) {


  houseType.addEventListener('change', function () {
    let newOffers = []

    offers.forEach((item) => {
      const typeHouses = item.offer.type;

      if (typeHouses == houseType.value) {
        newOffers = houseType.value;

      }
    });

    console.log(newOffers)

  })
}

export {addFilterListener}
