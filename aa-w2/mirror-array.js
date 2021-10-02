function mirrorArray(array) {
    //create an empty array to hold the return value
    //loop up to the length of the array times 2
    //the loop should start at the middle length/2 and looop downwards
        //it should puch 

    for (let i = array.length - 1; i >= 0; i--) {
        array.push(array[i])    
    };

    return array;
}

// solution 1
function mirrorArray(array) {
  let newArray = array.slice(0, array.length);

  for (let i = array.length - 1; i >= 0; i -= 1) {
    let el = array[i];
    newArray.push(el);
  }

  return newArray;
}

// solution 2
function mirrorArray(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    let el = array[i];
    newArray.push(el);
  }

  for (let i = array.length - 1; i >= 0; i -= 1) {
    let el = array[i];
    newArray.push(el);
  }

  return newArray;
}

console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ])
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]