let moreDotLessDash = function(str) {
    //create a variable to hold the total dot counts
    //create a varaible to hold the total dash counts set it as zero to start
    //split the string into an array 
    //loop through the array   
        //check each each value of the array is either a dot or a dash
            //if it's a dot then increase the dot count variable by 1
            //if it's a dash then increase the dash count by 1
    //return true is dots total is higher than dash else return false
    let dotCount = 0;
    let dashCount = 0;
    let words = str.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        //loop over the word string and check
        for (let j = 0; j < word.length; j++) {
            let letter = word[j];
            if (letter === ".") {
                dotCount++;
            } else if (letter === "-") {
                dashCount++;
            }
        }
    }

    return dotCount > dashCount;
};

//2nd way
function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            dotCount++;
        } else if (str[i] === '-') {
            dashCount++;
        }
    }
    return dotCount > dashCount;
}



console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false