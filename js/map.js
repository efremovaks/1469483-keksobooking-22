/* global L:readonly */
import {createCollection} from './create-collection.js';

const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapCanvas = document.querySelector('#map-canvas');



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
    lat: 35.681700,
    lng: 139.753882,
  }, 11);

// карта - изображение
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// кастомный маркер
const mainMarkerIco = L.icon ({
  iconUrl: './img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

// добавляеет маркер по координатам
const mainMarker = L.marker (
  {
    lat: 35.681700,
    lng: 139.753882,
  },
  {
    draggable: true,
    icon: mainMarkerIco,
  },
);
// выводит маркер на карту
mainMarker.addTo(map);

// возвращает координаты маркера в поле адрес
mainMarker.on('moveend', function(evt) {
  const addressInput = document.querySelector('#address');
  addressInput.disabled = true;
  addressInput.value = evt.target.getLatLng()
});

