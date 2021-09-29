let longestWord = function (sentence) {
    //split the sentence into an array
    //create a string variabe that holds the longest word
    //loop throuhg the array
        //compare the length of the word to the string 
        //if it's larger than the string then set the string to be that word
    //return the string
    let words = sentence.split(" ");
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
};

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''