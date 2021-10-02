
function tripler(array) {
  // your code here...
  let newArray = array.map(function(ele) {
    return ele * 3;
  });
  
  return newArray;
}