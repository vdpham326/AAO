const smoothieMachine = (...ingredients) => {
  return function (...moreIngredients) {
    ingredients = ingredients.concat(moreIngredients);

    return "I'm having a smoothie with " + ingredients.join(" and ");
  }
};

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));