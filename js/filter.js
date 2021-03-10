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
const selects = mapForm.querySelectorAll('select');
const houseType = mapForm.querySelector('#housing-type');
const housingPrice = mapForm.querySelector('#housing-price');
const housingRooms = mapForm.querySelector('#housing-rooms');
const housingGuests = mapForm.querySelector('#housing-guests');


function addFilterListener(offers) {
  mapForm.addEventListener('change', function () {
    let filteredOffers = [];

    selects.forEach((select) => {

      const selectPropType = select.name.split('-')[1];

      if (select.value === 'any') {
        reRenderMarkers(offers);
      }

      const newOffers = offers.filter((item) => item.offer[selectPropType] === select.value);
      console.log(newOffers)

      filteredOffers.push(newOffers);
    })

    reRenderMarkers(filteredOffers);
  });
}



// function addFilterListener(offers) {

//   houseType.addEventListener('change', function () {
//     if (houseType.value === 'any') {
//       reRenderMarkers(offers);
//       return
//     }
//     const filteredOffers = offers.filter((item) => item.offer.type === houseType.value);
//     reRenderMarkers(filteredOffers);
//   });

//   housingPrice.addEventListener('change', function () {
//     if (housingPrice.value === 'low') {
//       const filteredPrice = offers.filter((item) => item.offer.price <= PriceRange.LOW.MAX);
//       reRenderMarkers(filteredPrice);
//     } else if (housingPrice.value === 'middle') {
//       const filteredPrice = offers.filter((item) => item.offer.price > PriceRange.MIDDLE.MIN && item.offer.price < PriceRange.MIDDLE.MAX);
//       reRenderMarkers(filteredPrice);
//     } else if ((housingPrice.value === 'high')) {
//       const filteredPrice = offers.filter((item) => item.offer.price > PriceRange.HIGH.MIN);
//       reRenderMarkers(filteredPrice);
//     } else {
//       reRenderMarkers(offers);
//     }
//   });

//   housingRooms.addEventListener('change', function () {
//     if (+housingRooms.value === 1) {
//       const filteredRooms = offers.filter((item) => item.offer.rooms === 1);
//       reRenderMarkers(filteredRooms)
//     } else if (+housingRooms.value === 2) {
//       const filteredRooms = offers.filter((item) => item.offer.rooms === 2);
//       reRenderMarkers(filteredRooms)
//     } else if (+housingRooms.value === 3) {
//       const filteredRooms = offers.filter((item) => item.offer.rooms === 3);
//       reRenderMarkers(filteredRooms)
//     } else {
//       reRenderMarkers(offers);
//     }
//   });

//   housingGuests.addEventListener('change', function () {
//     if (+housingGuests.value === 0) {
//       const filteredGuests = offers.filter((item) => item.offer.guests === 0);
//       reRenderMarkers(filteredGuests);
//     } else if (+housingGuests.value === 1) {
//       const filteredGuests = offers.filter((item) => item.offer.guests === 1);
//       reRenderMarkers(filteredGuests);
//     } else if (+housingGuests.value === 2) {
//       const filteredGuests = offers.filter((item) => item.offer.guests === 2);
//       reRenderMarkers(filteredGuests);
//     } else {
//       reRenderMarkers(offers);
//     }
//   })
// }



export {
  addFilterListener
}
