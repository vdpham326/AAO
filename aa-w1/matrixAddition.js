let matrixAddition = function(m1, m2) {
    let sum = [];
    for (let row = 0; row < m1.length; row++) {
        let subArray = [];
        for (let col = 0; col < m1[0].length; col++) {
            subArray.push(m1[row][col] + m2[row][col]);
        }
        sum.push(subArray);
    }
    return sum;
};