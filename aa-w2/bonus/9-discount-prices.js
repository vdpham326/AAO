const discountPrices = (prices, discounts) => {
    return prices.map((price, index) => {
        let discountPrice = price - (price * discounts[index]);
        return `$${discountPrice.toFixed(2)}`;
    })
};

const discountPrices = (prices, discounts) => {
    const answer = [];
    for (let i = 0; i < prices.length; i++) {
        let newPrice = prices[i] * (1 - discounts[i]);
        answer.push('$' + newPrice.toFixed(2));
    }
    return answer;
}

  console.log(discountPrices([10.00, 21.99, 54.49, 60.00], [0.2, 0.15, 0.3, 0.5])) // prints [ '$8.00', '$18.69', '$38.14', '$30.00' ]
    console.log(discountPrices([4.99, 12.29, 59.00], [0.15, 0.3, 0.1])) // prints [ '$4.24', '$8.60', '$53.10' ]