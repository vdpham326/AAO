let longWords = function(words) {
    let filteredWords = words.filter(function(word) {
        return word.length > 5;
    });

    return filteredWords;
};

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]