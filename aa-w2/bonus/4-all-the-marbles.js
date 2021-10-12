function allTheMarbles(...anyObjects) {
    let totalWeight = 0;

    anyObjects.forEach(marble => {
        totalWeight += marble.weight;
    });
    return totalWeight;
}

 const marble1 = { color: 'red', weight: 20 };
    const marble2 = { color: 'purple', weight: 100 };
    const marble3 = { color: 'blue', weight: 40 };

    console.log(allTheMarbles(marble1, marble2)) // prints 120;
    console.log(allTheMarbles(marble1, marble2, marble3)) // prints 160;
    console.log(allTheMarbles()) // prints 0;
