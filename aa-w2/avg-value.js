function avgValue(array) {
  // your code here...
  let sum = array.reduce(function(accum, el) {
    return accum + el;
  });

  return sum / array.length;
}