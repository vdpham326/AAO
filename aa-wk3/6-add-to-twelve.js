function addToTwelve(array) {
    if (array.length < 2) return false;
    if (array[0] + array[1] === 12) return true;

    return addToTwelve(array.slice(1));
}

console.log(addToTwelve([1, 3, 4, 7, 5]));
