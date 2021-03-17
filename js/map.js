/* global L:readonly */
'use strict';

import {
  getCard
} from './cards.js';


const ZOOM = 9;
const MAIN_MARKER_WIDTH = 50;
const MAIN_MARKER_HEIGHT = 50;
const OFFER_MARKER_WIDTH = 40;
const OFFER_MARKER_HEIGHT = 40;

const mapCenterCoords = {
  lat: 35.80222,
  lng: 139.78935,
};


const addressInput = document.querySelector('#address');
const mapCanvas = document.querySelector('#map-canvas');


const map = L.map(mapCanvas);

// карта - изображение
const loadLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
)

loadLayer.addTo(map);

// кастомный маркер
const mainMarkerIco = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAIN_MARKER_WIDTH, MAIN_MARKER_HEIGHT],
  iconAnchor: [MAIN_MARKER_WIDTH / 2, MAIN_MARKER_HEIGHT],
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
  iconSize: [OFFER_MARKER_WIDTH, OFFER_MARKER_HEIGHT],
  iconAnchor: [OFFER_MARKER_WIDTH / 2, OFFER_MARKER_HEIGHT],
});


let markerList = [];

function removeMarkers() {
  markerList.forEach((marker) => map.removeLayer(marker));
}

// размещает маркеры предложений на карту
function renderToMap(data = []) {
  if (data.length < 1) {
    return;
  }

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

    markerList.push(marker);
    marker.addTo(map);
    marker.bindPopup(newDiv);
  });
}

// перерисовывает маркеры после удаления
function reRenderMarkers(data) {
  removeMarkers();
  renderToMap(data);
}


export {
  map,
  loadLayer,
  ZOOM,
  mapCenterCoords,
  renderToMap,
  mainMarker,
  addressCoords,
  reRenderMarkers
};
