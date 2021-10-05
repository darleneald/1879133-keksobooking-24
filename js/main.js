// https://stackoverflow.com/questions/45735472/generate-a-random-number-between-2-values-to-2-decimals-places-in-javascript/45736188

function getRandomFloatNumber(min, max, decimalPlaces) {
  if (min < 0 || max < 0){
    return 'Error';
  }
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces) * 1;
}
getRandomFloatNumber(0, 100, 8);

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_random_function2

function getRandomWholeNumber(min, max) {
  if (min < 0 || max < 0){
    return 'Error';
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
getRandomWholeNumber(0, 100);
