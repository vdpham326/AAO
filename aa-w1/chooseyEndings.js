let chooseyEndings = function(words, string) {
    //create a new empty array
    //loop through the words array
        //check if the word at each index ends in the same suffix string argument using the endsWith() method
            //if it's true then add it to the new array
    //return the new array 
    let newWords = [];
    
    if (words.length === 0) {
        return words;
      }    
    if (!Array.isArray(words)) {
        return [];
    }

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.endsWith(string)) {
            newWords.push(word);
        }
    }

    return newWords;
};

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]