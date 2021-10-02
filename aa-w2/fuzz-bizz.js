function fuzzBizz(max) {
    //create an empty array to hold the return value
    //for loop up to but not including max
    //check if each number is divisible by 2 or 7 but not both
        //if it is then push it into the empty array
    //return the array

    let arr = [];

    for (let i = 0; i < max; i++) {
        if ((i % 2 === 0 || i % 7 === 0) && !(i % 2 === 0 && i % 7 === 0)) {
            arr.push(i);
        }
    }

    return arr;
}

//2nd way 
function fuzzBizz(max) {
  let nums = [];

  for (let i = 0; i < max; i++) {
    if ((i % 2 === 0 || i % 7 === 0) && i % 14 !== 0) {
      nums.push(i);
    }
  }

  return nums;
}
console.log(fuzzBizz(17));
console.log(fuzzBizz(30));