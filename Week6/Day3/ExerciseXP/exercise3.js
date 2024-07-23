// Instructions
// Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [['user1', 18273], ['user2', 92833], ['user3', 90315]]
// FYI: The number is their ID number.
const objectToArray = (obj) => {
    const result = [];
    for (const key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}

const arrayOfArrays = objectToArray(users);
console.log(arrayOfArrays);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [['user1', 36546], ['user2', 185666], ['user3', 180630]]

const objectToArrayX2 = (obj) => {
    const result = [];
    for (const key in obj) {
        result.push([key, obj[key] * 2]); // doubles the value of every element from the original object prior to pushing it to an array
    }
    return result;
}

const arrayOfArraysX2 = objectToArrayX2(users);
console.log(arrayOfArraysX2);