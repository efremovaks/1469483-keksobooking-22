import {
  reRenderMarkers
} from './map.js';

const PriceRange = {
  LOW: {
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
const selects = mapForm.querySelectorAll('select');
const features = mapForm.querySelectorAll('input:checked');
// console.log(features);



function checkPrice(value, range) {

  switch (value) {
    case 'low':
      return range <= PriceRange.LOW.MAX;
    case 'middle':
      return range >= PriceRange.MIDDLE.MIN && range <= PriceRange.MIDDLE.MAX;
    case 'high':
      return range >= PriceRange.HIGH.MIN;
    default:
      return false;
  }
}

function checkFeatures(offer, typeFeature, value) {
  if (typeFeature) {
    console.log('checkFeatures', offer[value]);
  }
}

function matchFeaturesForOffer(offer) {
  const array = Array.from(features);
  // if (array.length === 0) {
  //   return true;
  // }

  return array.every((feature) => {
    // console.log('array ', array);
    return checkFeatures(offer, feature, feature.value);
  });
}


// в этой функции описываем все проверки селектов
// selectType - типы фильтров из фильтров
function matchSelect(offer, selectType, selectValue) {

  if (selectValue === 'any') {
    return true
  }

  if (selectType === 'price') {
    return checkPrice(selectValue, offer[selectType]);
  }

  // if (selectType === 'type' || selectType === 'rooms' || selectType === 'guests')) {
  return selectValue === offer[selectType].toString(); // если значение из карточки = выбранному в фильтре значению, возвращаем true для совпавших

}

// функция проверки всеx селектов для оффера
function matchSelectsForOffer(offer) {
  const array = Array.from(selects); // создает массив из коллекции(selects) полученных ДОМ элементов

  return array.every((select) => { // проверяет циклом все селекты(фильтры), удовлетворяют ли ВСЕ элементы (type, rooms, price...) массива условию, заданному в передаваемой функции
    const selectPropType = select.name.split('-')[1];
    return matchSelect(offer, selectPropType, select.value); // возвращает карточку(offer)
  });
}


function addFilterListener(offers) {
  mapForm.addEventListener('change', function () {
    let filteredOffers = [];

    offers.some((offerItem) => {
      // выходим из цикла если есть уже 10 элементов
      if (filteredOffers.length >= 10) {
        return true;
      }

      // здесь делаем проверки подходит ли оффер для того чтоб показать его на карте
      if (matchSelectsForOffer(offerItem.offer) && matchFeaturesForOffer(offerItem.offer)) {
        filteredOffers.push(offerItem);
      }
    });

    reRenderMarkers(filteredOffers);
  });
}

export {
  addFilterListener
}
