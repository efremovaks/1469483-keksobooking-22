function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('целое число из диапазона: ' + random(5, 1));


function randomFloat (min, max) {
  let rand =  Math.random() * (max - min + 1) + min;
  return rand.toFixed(1)
}

console.log('число с плавающей точкой из диапазона: ' + randomFloat(5, 1));
