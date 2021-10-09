let sentenceMapper = function(sentence, cb) {
    let words = sentence.split(" ");
    let newSentence = "";
    words.forEach(function(word) {
        newSentence += cb(word) + " ";
    });

    return newSentence;
};

//2nd way 

let sentenceMapper = function(sentence, cb) {
  let words = sentence.split(" ");
  return words.map(cb).join(" ");
};


let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'