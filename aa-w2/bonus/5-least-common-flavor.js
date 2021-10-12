function leastCommonFlavor(candyBag) {
    let lowest = Infinity;
    let lowestKey = null;

    for (let key in candyBag) {
        if (candyBag[key] < lowest) {
            lowest = candyBag[key];
            lowestKey = key;

        }
    }

    return lowestKey;

}

function leastCommonFlavor(candyBag) {

    if (Object.keys(candyBag).length === 0) {
        return null;
    }

    let answer;
    let lowestAmount = null;

    for (let flavor in candyBag) {
        if (lowestAmount === null || candyBag[flavor] < lowestAmount) {
            answer = flavor;
            lowestAmount = candyBag[flavor];
        }
    }

    return answer;
}


const bag1 = { cherry: 4, grape: 5, lemon: 3, orange: 2, berry: 4 };
    console.log(leastCommonFlavor(bag1)); // prints 'orange'

    const bag2 = { cherry: 5, grape: 4, lemon: 2, orange: 3, chocolate: 6 }
    console.log(leastCommonFlavor(bag2)); // prints 'lemon'

    console.log(leastCommonFlavor({})); // prints null