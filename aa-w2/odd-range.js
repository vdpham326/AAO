function oddRange(end) {
    //create an empty array 
    //loop up to the end variable 
    //check if each value is odd 
        //if it's odd add it to the empty array
    //return the array
    let odd = [];
    
    for (let i = 1; i <= end; i++) {
        if (i  % 2 === 1) {
            odd.push(i);
        }
    }

    return odd;
}

//2nd way 

function oddRange(end) {
  let arr = [];

  for (let i = 1; i <= end; i += 2) {
    arr.push(i);
  }

  return arr;
}
