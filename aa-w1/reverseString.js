function reverseString(str) {
    let revString = "";
    //iterate of over the current string starting at the last character
    for (let i = str.length - 1; i >= 0; i--) {
        //add the char to the new string variable
        revString += str[i];
    }
    return revString;
}

console.log(reverseString("fish")); // "hsif"
console.log(reverseString("marathon")); //"nohtaram"