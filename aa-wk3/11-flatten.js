function flatten(arr) {
  let newArray = [];

  arr.forEach(function (contents) {
      if (Array.isArray(contents)) {
        newArray.push(...flatten(contents));
      } else {
        newArray.push(contents);
      }
  });

  return newArray;
}