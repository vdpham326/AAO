function bestStudent(...anyObjects) {
    let bestStudent = "";
    let highestPoints = null;
    
    anyObjects.forEach(obj => {
        if (obj.points > highestPoints) {
            highestPoints = obj.points;
            bestStudent = obj.name;
        }
    });
    return bestStudent;
}

//2nd way
function bestStudent(...students) {

    if (!students.length) {
        return null;
    }

    let maxPoints = null;
    return students.reduce((bestStudent, student) => {
        if (maxPoints === null || student.points > maxPoints) {
            maxPoints = student.points
            return student;
        } else {
            return bestStudent;
        }
    }, 0).name;
}

const student1 = { name: "Geoff", points: 50 };
    const student2 = { name: "Justin", points: 1000 };
    const student3 = { name: "Tom", points: 568 };
    const student4 = { name: "Emily", points: 700 };
    const student5 = { name: "Corina", points: 750 };

    console.log(bestStudent(student1, student2, student3, student4, student5)) // returns "Justin"