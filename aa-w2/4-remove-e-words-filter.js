function removeEWords(sentence) {
    //create an empty string
    //split the string into an array
    //iterata through the sentence and use the filter method to not include words that has an e in it
    //return the new sentence. 
    let words = sentence.split(" ");
    
    let noE = words.filter(function(word) {
        return !word.toLowerCase().includes("e");
    });

    return noE.join(" ");
};


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
