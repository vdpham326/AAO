function coinCollector(numCoins) {
    let coins = [];

    return function(coin) {
        return function()
    }
}

function coinCollector(numCoins) {
  let coins = [];
  const _collect = (coin) => {
    coins.push(coin);
    if (coins.length >= numCoins) {
      return coins;
    } else {
      return _collect;
    }
  };
  return _collect;
}



  let oneCoin = coinCollector(1); // returns a function
  console.log(oneCoin(10)); // prints [10]


  let twoCoins = coinCollector(2); // returns a function
  twoCoins(25); // returns a function
  console.log(twoCoins(10)); // prints [25, 10]

  let threeCoins = coinCollector(3); // returns a function
  threeCoins(25); // returns a function
  threeCoins(5); // returns a function
  console.log(threeCoins(10)); // prints [ 25, 5, 10 ]
