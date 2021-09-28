function reverseSentence(sentence) {
    //create a new empty array called reversed
    //split the sentence into an array using the split method and set it be tthe reversed array
    //loop backwards from the new array and push it into the reversed array 
    //joined the reversed array and return it
    let newArr = sentence.split(" ");
    let reversed = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        let letter = newArr[i];
        reversed.push(letter);
    }
    let newSentence = reversed.join(" ");
    return newSentence;
};


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'