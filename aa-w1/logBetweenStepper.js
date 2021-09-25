let logBetweenStepper = function(min, max, step) {
    let index = min;
    while(index <= max) {
        console.log(index);
        index += step;
    }
};

logBetweenStepper(5, 9, 1); // prints out:
5
6
7
8
9


logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15