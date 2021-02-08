function random(min, max) {

  if (min < 0 || max < 0 || min > max) {
    return 0;
  }

  if (min === max) {
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}


function randomFloat(min = 0, max = 10) {

  if (min < 0 || max < 0 || min > max) {
    return 0;
  }

  if (min === max) {
    return min;
  }

  let rand = Math.random() * (max - min + 1) + min;
  return rand.toFixed(5);
}



const title = ['заголовок предложения-1', 'заголовок предложения-2', 'заголовок предложения-3'];
const type = ['palace', 'flat', 'house', 'bungalow'];
const checkinCheckout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const description = ['описание помещения-1', 'описание помещения-2', 'описание помещения-3'];
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];



function getAvatar() {
  let index = random(1, 8);

  return 'img/avatars/user' + '0' + index + '.png';
}


function getAnything(array) {
  let i = random(0, array.length - 1);

  return array[i];
}


function setOffer() {
  let coordinates = {

    x: randomFloat(35.65000, 35.70000),
    y: randomFloat(139.70000, 139.80000),
  }


  function getArrayStrings(arr) {
    let someArr = []
    let lenArr = random(0, arr.length - 1);

    for (let x = 0; x < lenArr + 1; x++) {
      someArr.push(arr[x]);
    }
    return someArr;
  }


  return {
    author: {
      avatar: getAvatar(),
    },

    offer: {
      title: getAnything(title),
      address: coordinates.x + ', ' + coordinates.y,
      price: random(100, 10000),
      type: getAnything(type),
      rooms: random(1, 10),
      guests: random(1, 30),
      checkin: getAnything(checkinCheckout),
      checkout: getAnything(checkinCheckout),
      features: getArrayStrings(features),
      description: getAnything(description),
      photos: getArrayStrings(photos),
    },

    location: {
      coordinates,
    },
  };
}

function createCollection() {
  let collection = [];

  for (let i = 0; i < 10; i++) {
    collection.push(setOffer());
  }

  return collection;
}

console.log(createCollection());
