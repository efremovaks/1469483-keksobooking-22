import {setOffer} from './offer.js';

function createCollection(number) {
  const collection = [];

  for (let i = 0; i < number; i++) {
    collection.push(setOffer());
  }

  return collection;
}


export {createCollection};
