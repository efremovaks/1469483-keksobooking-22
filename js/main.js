function random(min = 0, max = 10) {

  if (min < 0 || max < 0 || min > max) {
    return null;
  }

  if (min === max) {
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

random();


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

randomFloat();


// описывает автора
// const avatars = ['img/avatars/user{{xx}}.png'];


// содержит информацию об объявлении

const title = ['заголовок предложения-1', 'заголовок предложения-2', 'заголовок предложения-3'];
const address = [];
const type = ['palace', 'flat', 'house', 'bungalow'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const description = ['описание помещения-1', 'описание помещения-2', 'описание помещения-3']
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


// местоположение в виде географических координат

// const location = {
//   x: 35.65000, //широта. случайное значение от 35.65000 до 35.70000
//   y: 139.70000, //долгота. случайное значение от 139.70000 до 139.80000
// }


function total() {

  return {
    author {
      avatars: '',
    };

    offer {
      title: '',
      address: '',
      price: '',
      type: '',
      rooms: '',
      guests: '',
      checkin: '',
      checkout: '',
      features: '',
      description: '',
      photos: '',
    };

    location {
      x: '',
      y: '',
    }
  }
}
