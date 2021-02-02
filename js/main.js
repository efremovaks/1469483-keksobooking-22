function random(min = 0, max = 10) {

  if (min < 0 || max < 0 || min > max) {
    return null;
  }

  if (min === max) {
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

random()


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

randomFloat()
