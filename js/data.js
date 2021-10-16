import {getRandomWholeNumber, getRandomFloatNumber} from './random.js';

const ADVERT_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ADVERT_CHECK_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const ADVERT_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const ADVERT_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayItem = (items) =>  items[getRandomWholeNumber(0, items.length - 1)];

const getRandomAvatar = (id) => `img/avatars/user${String(id).padStart(2, '0')}.png`;

const getRandomAdvert = (id) => {
  const location = {
    lat: getRandomFloatNumber(35.65000, 35.70000),
    lng: getRandomFloatNumber(139.70000, 139.80000),
  };

  return {
    author: {
      avatar: getRandomAvatar(id), // img/avatars/user01.png
    },
    address: `${location.lat}, ${location.lng}`, // '100, 50'
    type: getRandomArrayItem(ADVERT_TYPES),
    title: '[title]',
    price: getRandomWholeNumber(1, 100),
    guests: getRandomWholeNumber(1, 100),
    rooms:  getRandomWholeNumber(1, 100),
    checkin: getRandomArrayItem(ADVERT_CHECK_TIMES),
    checkout: getRandomArrayItem(ADVERT_CHECK_TIMES),
    features: getRandomArrayItem(ADVERT_FEATURES),
    description: '[description]',
    photos: getRandomArrayItem(ADVERT_PHOTOS),
    location,
  };
};

export {getRandomAdvert};
