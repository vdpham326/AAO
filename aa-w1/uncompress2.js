let uncompress = function(str) {
    //creat an empty string
    //loop through the str string and skip by 2 
    //set the first letter to be at i 
    //set the second letter which is a number to be at i + 1
    //convert the string number to a number using Number()
    //create an inner loop and loop up to the number
        //add the second letter to the first letter nth number of time
    //return the new string
    let word = "";

    for (let i = 0; i < str.length; i += 2) {
        let letter = str[i];
        let num = str[i + 1];
        num = Number(num);
        for (let j = 0; j < num; j++) {
            word += letter;
        }
    }

    return word;
    
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'