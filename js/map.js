/* global L:readonly */

import {getCard} from './cards.js';

const mapCenterCoords = {
  lat: 35.80222,
  lng: 139.78935,
}

const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapCanvas = document.querySelector('#map-canvas');
const addressInput = document.querySelector('#address');



const map = L.map(mapCanvas)
  // собитие НЕзагрузки карты
  .on('unload', function () {
    form.classList.add('ad-form--disabled');
    form.disabled = true;
    mapFilters.classList.add('map__filters--disabled');
    mapFilters.disabled = true;
  })

  // координаты центровки карты и зум
  .setView({
    lat: mapCenterCoords.lat,
    lng: mapCenterCoords.lng,
  }, 9);

// карта - изображение
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// кастомный маркер
const mainMarkerIco = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

// добавляеет маркер по координатам
const mainMarker = L.marker({
  lat: mapCenterCoords.lat,
  lng: mapCenterCoords.lng,
}, {
  draggable: true,
  icon: mainMarkerIco,
});

function mainMarkerPosition() {
  // выводит маркер на карту
  mainMarker.addTo(map);
  // mainMarker.remove(map);

  mainMarker.on('moveend', function (evt) {
    const coords = evt.target.getLatLng();
    addressInput.value = coords.lat.toFixed(5) + ', ' + coords.lng.toFixed(5);
  });
}

mainMarkerPosition();

// возвращает координаты маркера в поле адрес
function addressCoords() {
  addressInput.value = mapCenterCoords.lat + ', ' + mapCenterCoords.lng;
}

addressCoords();

// метки объектов объявлений
const iconLable = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// размещает маркеры предложений на карту
function renderToMap(data) {

  data.forEach((item) => {

    const newDiv = document.createElement('div');
    newDiv.classList.add('map__card');
    newDiv.appendChild(getCard(item));

    const marker = L.marker({
      lat: item.location.lat,
      lng: item.location.lng,
    }, {
      icon: iconLable,
    });
    marker.addTo(map);
    marker.bindPopup(newDiv);
  });
}



export {
  renderToMap,
  mainMarker,
  mapCenterCoords,
  addressCoords
}
