import {getData} from './server.js';

function createCollection(number) {
  const collection = [];

  for (let i = 0; i < number; i++) {
    collection.push(getData());
  }

  return collection;
}

console.log(createCollection(1))

export {createCollection};
