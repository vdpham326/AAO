let shortestWord = function(sentence) {
    //split the sentence into an array
    //set a shortest variable to be the length of the word at the first index
    //loop over the array
    //compare the length of the word at each index to the shortest variable
        //if it's shortest than the shortest then set it equal to shortest
        //if it's equal to shortest then set it equal to shortest
    //return the shortest string
    let words = sentence.split(" ");
    let shortWord = words[0];

    for (let i = 0; i < words.length; i++) {
        let wordLength = words[i].length;
        if (wordLength === shortWord.length) {
            shortWord = words[i];
        } else if (wordLength < shortWord.length) {
            shortWord = words[i];
        }
    }
    
    return shortWord;
};

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
console.log(shortestWord("hello is that to hell you went")); //to