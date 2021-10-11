let sandwichMaker = () => {
    let ingredient = "One sandwich with tomato";

    function addOn(str) {
        return ingredient += " and " + str;
    }
    return addOn;
};

//2nd way
function sandwichMaker() {
  let order = "One sandwich with tomato";

  return function (food) {
    order = order + " and " + food;
    return order;
  };
}

let sandwich = sandwichMaker(); // => returns a function
console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"
