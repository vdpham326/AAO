function intersect(arr1, arr2) {
    //create an empty to hold the return value
    //loop through the first array 
        //check if the value at index of each array is the same
            //if it's the same then push it to the empty array
    //return the now populated empty array
    let intersect = [];
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;

    if (arr1Length >= arr2Length) {
        for (let i = 0; i < arr1Length; i++) {
            let indexCommon = arr1.indexOf(arr2[i]);
            if (indexCommon > 0) {
                intersect.push(arr1[indexCommon]);
            }
            
        }
    } else if (arr2Length >= arr1Length) {
        for (let i = 0; i < arr2Length; i++) {
            let indexCommon = arr2.indexOf(arr1[i]);
            if (indexCommon > 0) {
                intersect.push(arr2[indexCommon]);
            }
        }
    }

    return intersect;
}

//2nd way
function intersect(arr1, arr2) {
  let commonEles = [];

  for (let i = 0; i < arr1.length; i++) {
    let ele = arr1[i];
    if (arr2.indexOf(ele) > -1) {
      commonEles.push(ele);
    }
  }

  return commonEles;
}


console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']));

console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); //=> []