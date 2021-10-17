function isSorted(array) {
    if (array.length < 2) {
        return true;
    }

    if (array[0] > array[1]) return false;
    return isSorted(array.slice(1));
    
}



// function isSorted(arr) {
//   if (arr.length < 2) return true;
//   if (arr[0] > arr[1]) return false;
//   return isSorted(arr.slice(1));
// }

console.log(isSorted([1, 2, 3, 4, 5]));