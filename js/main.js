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

let author = { // let или const ?
  avatar : 'img/avatars/user{{xx}}.png', // вместо {{xx}} , судя по всему должна вызываться функция, которая генерит число, вопрос - как ее вкорячить в адрес?
};


// содержит информацию об объявлении

let offerType = ['palace', 'flat', 'house', 'bungalow'];
let offerFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let offerPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

let offer = {
  title : 'заголовок предложения-1',
  address : '{{location.x}}, {{location.y}}',
  price : 1, // тут тоже берется рандомное число из функции?
  type : offerType[i], //что-то из масива?
  rooms : 1, // рандомное число из функции?
  guests : 1, // рандомное число из функции?
  checkin : '12:00', // 13:00 или 14:00
  checkout : '12:00', // 13:00 или 14:00
  features : 'wifi', //что-то из масива?
  description : 'описание помещения-1',
  photos : 'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
};

// местоположение в виде географических координат

let location = {
  x : 35.65000, //широта. случайное значение от 35.65000 до 35.70000
  y : 139.70000, //долгота. случайное значение от 139.70000 до 139.80000
}
