let endWithVowelOrNot = function(word) {
    let vowels = "aeiou";
    let lastChar = word[word.length - 1];

    //if word ends with a vowel
    if (vowels.includes(lastChar)) {
        return word + word;
    }

    //if word ends with a non-vowel, repeat
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word + word.slice(i);
        }

    }
}

let repeatingTranslate = function(sentence) {
    //split the sentence into an array
    let words = sentence.split(" ");
    let newWords = [];

    //check the length of each word
    words.forEach(function(word) {
        if (word.length < 3) {
            newWords.push(word);
        } else {
            newWords.push(endWithVowelOrNot(word));
        }
    });

    return newWords.join(" ");

};

//using the map method
let repeatingTranslate = function(sentence) {
    let words = sentence.split(' ');
    let newWords = words.map(function(word) {
        if (word.length < 3) {
            return word;
        } else {
            return translateWord(word);
        }
    });
    return newWords.join(' ');
};


console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"