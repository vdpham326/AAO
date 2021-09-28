let removeEWords = function(sentence) {
    let words = sentence.split(" "); //split the sentence into an array
    let filtered = []; //create a new array to hold the filtered value 
    //loop through the word array
    for (let i = 0; i < words.length; i++) {
        let word = words[i]; //set this variable to be the value of the word at each index
        //check if the word has an e 
            //if it doesn't have an e than add that word to the filtered array
        if (!word.toLowerCase().includes("e")) {
            filtered.push(word);
        }
    }
    return filtered.join(" "); //combine the array into a sentence and then return it
};


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'


