import {getRandomAdvert} from './data.js';

const getRandomAdverts = (count) => {
  const adverts = [];

  for (let id = 1; id <= count; id++) {
    adverts.push(getRandomAdvert(id));
  }
  return adverts;
};

getRandomAdverts(10);
