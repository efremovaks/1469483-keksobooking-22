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
  const index = random(1, 8);

  return 'img/avatars/user0' + index + '.png';
}


function getRandomItem(array) {
  const i = random(0, array.length - 1);

  return array[i];
}


// function getArrayStrings(arr) {
//   const someArr = [];
//   const lenArr = random(0, arr.length - 1);

//   for (let x = 0; x < lenArr + 1; x++) {
//     someArr.push(arr[x]);
//   }
//   return someArr;
// }


function getArrayStrings(arr) {

  const lenArr = random(0, arr.length - 1) || 1;
  const someArr = arr.slice(0, lenArr);
  return someArr;
}


function setOffer() {
  const coordinates = {
    x: randomFloat(35.65000, 35.70000),
    y: randomFloat(139.70000, 139.80000),
  }

  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomItem(title),
      address: coordinates.x + ', ' + coordinates.y,
      price: random(100, 10000),
      type: getRandomItem(type),
      rooms: random(1, 10),
      guests: random(1, 30),
      checkin: getRandomItem(checkinCheckout),
      checkout: getRandomItem(checkinCheckout),
      features: getArrayStrings(features),
      description: getRandomItem(description),
      photos: getArrayStrings(photos),
    },
    location: coordinates,
  };
}


function createCollection() {
  const collection = [];

  for (let i = 0; i < 10; i++) {
    collection.push(setOffer());
  }

  return collection;
}

createCollection();

// console.log(createCollection());
