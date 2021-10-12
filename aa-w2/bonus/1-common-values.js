function commonValues(obj1, obj2) {
    values1 = Object.values(obj1);
    values2 = Object.values(obj2);
    
    return values1.filter((ele,index) => {
        return values2[index].includes(ele);
    });

}

function commonValues(obj1, obj2) {
    const result = [];

    Object.values(obj1).forEach(val => {
        if (Object.values(obj2).includes(val)) {
            result.push(val);
        }
    });

    return result;
}


const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]
    