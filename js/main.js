// https://stackoverflow.com/questions/45735472/generate-a-random-number-between-2-values-to-2-decimals-places-in-javascript/45736188

function genRand(min, max, decimalPlaces) {
  if (min < 0){
    return 'Error';
  }
  return (Math.random() * (max - min) + min).toFixed(decimalPlaces) * 1;
}
genRand(0, 100, 8);
