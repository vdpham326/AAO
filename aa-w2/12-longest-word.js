//using forEach
let longestWord = function(sentence) {
    let longest = "";
    let words = sentence.split(" ");
    let length = 0;
    words.forEach(function(word) {     
        if (word.length > longest.length) {
            longest = word;
        }
    })

    return longest;
};

let longestWord = function(sentence) {
    let words = sentence.split(' ');

    return words.reduce(function(acc, word) {
        if (word.length > acc.length) {
            acc = word;
        }
        return acc;
    });
};

//using map 
let longestWord = function(sentence) {
    let words = sentence.split(" ");
    let newWords = words.map(function(word) {

    });
};

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
