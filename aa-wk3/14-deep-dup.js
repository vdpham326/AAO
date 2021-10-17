
function deepDup(arr) {
  let dupArr = [];
  for (let ele of arr) {
    if (ele instanceof Array) {
      dupArr.push(deepDup(ele));
    } else dupArr.push(ele);
  }
  return dupArr;
}
