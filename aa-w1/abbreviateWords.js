let removeVowel = function(word) {
    //loop through the word
    //create a string variable that as "aeiou" value
    //create an empty new string variable that will add the non-vowel letter 
    //loop through the word
        //if the letter is not a vowel then add it to the empt string
    //return the empty string
    let vowels = "aeiou";
    let newWord = "";

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!vowels.includes(char.toLowerCase())) {
            newWord += char;
        }
    }
    return newWord;
};

let abbreviateWords = function(sentence) {
    //create a new emptty string variable to hold the return value
    //split the sentence into an array
    //loop through the array and check if the value at each index has length that is longer than 4
        //if the length is longer called the helper function that will check if the word has a vowel
            //if it has a vowel it'll remove the vowel and return the word with the vowel
            //set the value at that index to be the return value of the word without the vowel included
        //call the join method to combine the array into one sentence and return the new sentence
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 4) {
            words[i] = removeVowel(word);
        }
    }
    return words.join(" ");
};

//2nd way

let abbreviateWords = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 4) {
            newWords.push(removeVowels(word));
        } else {
            newWords.push(word);
        }
    }

    return newWords.join(' ');
};
console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg