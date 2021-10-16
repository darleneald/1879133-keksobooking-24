function getRandomFloatNumber(min, max, decimalPlaces) {
  if (min < 0 || max < 0){
    return 'Error';
  }
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces) * 1;
}

function getRandomWholeNumber(min, max) {
  if (min < 0 || max < 0){
    return 'Error';
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export {getRandomWholeNumber, getRandomFloatNumber};
