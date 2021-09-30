function yeller(words) {
    let copy = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        copy.push(word.toUpperCase() + "!");
    }
    return copy;

}

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]