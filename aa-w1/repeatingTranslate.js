let repeatingTranslate = function(sentence) {
    //split the sentence into an array. 
    let words = sentence.split(" ");
    
    //check the length of each word
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length >= 3) {
            //use the helper function
            words[i] = endWithVowelOrNot(word);
        }
    }
    return words.join(" ");
};

let endWithVowelOrNot = function(word) {
    let vowels = "aeiou";
    let lastChar = word[word.length - 1];

    if (vowels.includes(lastChar)) {
        return word + word;
    }
    //else loop through each character starting at the last spot to see if there's a vowel
    for (let i = word.length - 1; i >= 0; i--) {
        let lastChar = word[i];
        if (vowels.includes(lastChar)) {
            return word + word.slice(i);
        }
    }
};

//2nd way 
let repeatingTranslate = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length < 3) {
            newWords.push(word);
        } else {
            newWords.push(translateWord(word));
        }
    }
    return newWords.join(' ');
};


let translateWord = function(word) {
    let vowels = 'aeiou';
    let lastChar = word[word.length - 1];
    if (vowels.includes(lastChar)) {
        return word + word;
    }

    let i = word.length - 1;
    while (i >= 0) {
        if (vowels.includes(word[i])) {
            return word + word.slice(i);
        }
        i--;
    }
};

// let arr = ["hello", "why"];
// arr[0] = arr[0] + arr[0];
// console.log(arr);
//console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
