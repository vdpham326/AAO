let shortestWord = function(sentence) {
    //split the sentence into an array
    //iterate through the array using the reduce method 
        //check the length of the word at each iteration 
            //if it's shorter then or equal to then return it
    //return the short word 
    let words = sentence.split(" ");

    let shortestWord = words.reduce(function(currentWord, nextWord) {
        if (nextWord.length <= currentWord.length) {
            return nextWord;
        } else {
            return currentWord;
        }
    });


    return shortestWord;
};

//using forEach method:

let shortestWord = function(sentence) {
  let words = sentence.split(' ');
  let shortest = words[0];
  words.forEach(function(word) {
    if (word.length <= shortest.length) {
        shortest = word;
    }
  });
  return shortest;
};

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
