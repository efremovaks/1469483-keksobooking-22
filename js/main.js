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


function getTitle() {
  let titleName = random(0, title.length - 1);

  return title[titleName];
}


// function getPrice() {
//   let randomPrice = random(100, 10000);

//   return randomPrice;
// }


function getType() {
  let i = random(0, type.length - 1);

  return type[i];
}


function getCheckin() {
  let i = random(0, checkinCheckout.length - 1);

  return checkinCheckout[i];
}


function getCheckout() {
  let i = random(0, checkinCheckout.length - 1);

  return checkinCheckout[i];
}


function getDescription() {
  let i = random(0, description.length - 1);

  return description[i];
}

function setOffer() {

  return {
    author: {
      avatar: getAvatar(),
    },

    offer: {
      title: getTitle(),
      address: randomFloat(35.65000, 35.70000) + ', ' + randomFloat(139.70000, 139.80000),
      price: random(100, 10000), //getPrice()
      type: getType(),
      rooms: random(1, 10),
      guests: random(1, 30),
      checkin: getCheckin(),
      checkout: getCheckout(),
      features: '',
      description: getDescription(),
      photos: '',
    },

    location: {
      x: randomFloat(35.65000, 35.70000),
      y: randomFloat(139.70000, 139.80000),
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
