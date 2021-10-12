function coupon(discount) {
    return function(array) {
        return array.map(ele => ele - (ele * discount));
    }
}

//2nd and shorter way using arrow functions
function coupon(discount) {
  return (prices) => {
    return prices.map((price) => (price -= price * discount));
  };
}

let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]


let twentyPercent = coupon(0.2);
console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]
