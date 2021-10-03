function yeller(words) {
    return words.map(function(word) {
        return word.toUpperCase() + "!";
    });
}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]