function maxInMatrix(matrix) {
    //takes a 2d array and return the largest value
    //loop over the outer array
    let largestNum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let outerArray = matrix[i];
        for(let j = 0; j < outerArray.length; j++) {
            let num = outerArray[j];
            if (num > largestNum) {
                largestNum = num;
            }
        }
    }
    return largestNum;
};

//2nd way
function maxInMatrix(matrix) {
    let currentMax = -Infinity;
    for (let row = 0 ; row < matrix.length ; row++) {
      for (let col = 0 ; col < matrix[0].length ; col++) {
        if (matrix[row][col] > currentMax) {
          currentMax = matrix[row][col];
        }
      }
    }
    return currentMax;
  }
  

matrix = [[11,  2,-99],
          [20, 119, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72
