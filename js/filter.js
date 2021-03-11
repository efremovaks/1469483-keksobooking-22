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

function checkPrice (value, range) {

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



// в этой функции описываем все проверки селектов
// selectType - типы фильтров из фильтров
function matchSelect(offer, selectType, selectValue) {
  // console.log(selectType)
  if (selectValue === 'any') {
    return true
  }

  if (selectType === 'type') {
    return offer[selectType] === selectValue; // если значение из карточки = выбранному в фильтре значению, возвращаем true для совпавших
  }

  if (selectType === 'rooms') {
    return offer[selectType] === +selectValue;
  }

  if (selectType === 'guests') {
    return offer[selectType] === +selectValue;
  }

  if (selectType === 'price') {
    return checkPrice (selectValue, offer[selectType]);
  }

  return true;
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
      if (matchSelectsForOffer(offerItem.offer)) {
        filteredOffers.push(offerItem);
      }
    });

    reRenderMarkers(filteredOffers);
  });
}

export {
  addFilterListener
}
