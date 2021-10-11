// const arrowAvgValue = array => {
//     let sum = 0;
//     array.forEach(ele => sum += ele);
//     return sum / array.length;
// };

const arrowAvgValue = array => {
    let sum = array.reduce((accum = 0, ele) => accum += ele);
    return sum / array.length;
};

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
console.log(arrowAvgValue([100, 60, 64])); // => 74.66666666666667