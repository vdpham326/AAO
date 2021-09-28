function longWords(words) {
    //create a new array to hold words that are longer than 5 characters
    //loop through array and check if the length of val at each position is longer than 5
        //if it's longer than 5 then add it to the new arr
    //return the new array
    let newArr = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 5) {
            newArr.push(word);
        }
    }
    return newArr;
};

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]