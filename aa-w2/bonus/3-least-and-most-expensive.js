function leastAndMostExpensive(catalog) {
    //loop through the obj values and compare the least and max values
    //set the least values to be the first value and the max value to be the first value
    let leastMax = [];
    let keys = Object.keys(catalog);
    let smallest = keys[0];
    let largest = keys[0];

    for (let key in catalog) {
        if (catalog[key] > largest) {
            largest = catalog[key];
        } 
        if (catalog[key] < smallest) {
            smallest = catalog[key]
        }
    }
    leastMax.push(smallest, largest);
    return leastMax;

}

function leastAndMostExpensive(catalog) {
    let cheapestToy;
    let lowestPrice = Infinity;
    let mostExpensive;
    let highestPrice = -Infinity;

    for (let key in catalog) {
        if (catalog[key] < lowestPrice) {
            cheapestToy = key;
            lowestPrice = catalog[key];
        }

        if (catalog[key] > highestPrice) {
            mostExpensive = key;
            highestPrice = catalog[key];
        }
    }

    return [cheapestToy, mostExpensive];
}


const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
