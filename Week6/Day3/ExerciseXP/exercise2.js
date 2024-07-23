// Instructions
function displayStudentInfo(objUser) {
    //destructuring
    const { first, last } = objUser;
    return console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' }); // Output: 'Your full name is Elie Schoppik'


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'