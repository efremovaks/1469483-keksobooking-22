import { qwerty } from './map.js';

function getData() {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      console.log(qwerty(data));
    })
}
getData()
export {getData};
