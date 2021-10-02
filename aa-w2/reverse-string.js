function reverseString(string) {
    //create an empty array to hold the return value
    //split the string into an array by "-"
    //loop through the array backwards
        //add the value to the empty array 
    //join the array into a single sentence with the join method by "-"
    //return the sentence
    let words = string.split("-");
    let reversed = [];

    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        reversed.push(word);
    }

    return reversed.join("-");

}