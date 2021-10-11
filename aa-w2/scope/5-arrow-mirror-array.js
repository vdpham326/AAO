const arrowMirrorArray = array => {
    for (let i = array.length - 1; i >= 0; i--) {
        let ele = array[i];
        array.push(ele);        
    }
    return array; 
};

//2nd way
const mirrorArray = (array) => {
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
};
console.log(arrowMirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(arrowMirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]