// function hiddenCounter() {
//     let count = 0;
//     return function() {
//         return count++;
//     }
// };


function hiddenCounter() {
  let count = 0;
  return () => (count += 1);
}

let hidden1 = hiddenCounter(); //returns a function
hidden1(); // returns 1
console.log(hidden1()); // returns 2

let hidden2 = hiddenCounter(); // returns a function
console.log(hidden2()); // returns 1