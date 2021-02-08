function random(min, max) {

  if (min < 0 || max < 0 || min > max) {
    return null;
  }

  if (min === max) {
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}



function randomFloat(min = 0, max = 10) {

  if (min < 0 || max < 0 || min > max) {
    return null;
  }

  if (min === max) {
    return min;
  }

  let rand = Math.random() * (max - min + 1) + min;
  return rand.toFixed(1);
}



const title = ['заголовок предложения-1', 'заголовок предложения-2', 'заголовок предложения-3'];
const type = ['palace', 'flat', 'house', 'bungalow'];
const checkinCheckout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const description = ['описание помещения-1', 'описание помещения-2', 'описание помещения-3'];
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];




function setOffer() {
  let randomAvatar = random(1, 8);

  return {
    author: {
      avatar: 'img/avatars/user' + '0' + randomAvatar + '.png',
    },

    offer: {
      title: '',
      address: '',
      price: 0,
      type: '',
      rooms: 0,
      guests: 0,
      checkin: '',
      checkout: '',
      features: '',
      description: '',
      photos: '',
    },

    location: {
      x: 0,
      y: 0,
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
