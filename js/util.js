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

export {random, randomFloat};
