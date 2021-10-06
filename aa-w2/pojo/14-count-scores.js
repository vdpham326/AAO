function countScores(people) {
    //loop over the array of objects
    //create an empty obj
    //
    let peopleObj = {};

    for (let i = 0; i < people.length; i++) {
        let objValues = people[i]; //each obj
        let name = objValues.name;
        let score = objValues.score;

        if (peopleObj[name] === undefined) {
            peopleObj[name] = score;
        } else {
            peopleObj[name] += score;
        }

    }

    return peopleObj;
}

let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }