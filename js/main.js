function random(min, max) {
  if (min < 0 || max < 0 || min > max || min === max) {
    return null
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

console.log('целое число из диапазона(min > max): ' + random(5, 1));
console.log('целое число из диапазона(minus): ' + random(-5, -1));
console.log('целое число из диапазона(min < max): ' + random(0, 8));



function randomFloat (min, max) {
  if (min < 0 || max < 0 || min > max || min === max) {
    return null
  } else {
    let rand =  Math.random() * (max - min + 1) + min;
    return rand.toFixed(1)
  }
}

console.log('число с плавающей точкой из диапазона (min > max): ' + randomFloat(10, 5));
console.log('число с плавающей точкой из диапазона (min < max): ' + randomFloat(1, 5));
console.log('число с плавающей точкой из диапазона (minus): ' + randomFloat(1, 1));
