import {setOffer} from './data.js';

function createCollection(arr) {
  const collection = [];

  for (let i = 0; i < arr; i++) {
    collection.push(setOffer());
  }

  return collection;
}


export{createCollection};
