const arrowRestSum = (...args) => {
    let sum = 0;
    args.forEach(ele => sum += ele);
    return sum;
};

//2nd way using reduce
const arrowRestSum = (...otherNums) => {
  let sum = otherNums.reduce((acc, el) => (acc += el));
  return sum;
};


console.log(arrowRestSum(3,5,6)); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0