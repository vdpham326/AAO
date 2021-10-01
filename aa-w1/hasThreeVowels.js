function hasThreeVowels(string) {
    //create a variable to hold the count of the vowels
    //create a variable that holds the string "aeiou"
    //loop through the string
        //check each character of the string to see of it's a vowels
            //if it is then increat the count by 1
    //after the loop check if the count is 3 or more 
        //if it is then return true 
        //else rreturn false
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count >= 3;
};

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false