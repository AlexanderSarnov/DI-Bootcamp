// Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
console.log("There are " + building.numberOfFloors + " floors in the building");

// Console.log how many apartments are on the floors 1 and 3.
console.log("There are " + building.numberOfAptByFloor.firstFloor + " apartments on the first floor and " + building.numberOfAptByFloor.thirdFloor + " apartments on the third floor.");

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("The name of the second tenant is " + building.nameOfTenants[1] + " and the number of rooms he has in his apartment is " + building.numberOfRoomsAndRent.dan[0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.If it is, than increase Dan’s rent to 1200.
sumOfRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];

console.log("Sum of Sarah's and David's rent is " + sumOfRent + " while Dan's rent is " + building.numberOfRoomsAndRent.dan[1]);

check = sumOfRent > building.numberOfRoomsAndRent.dan;
if (check === true) {

    console.log("Since " + sumOfRent + " bigger than Dan's rent by " + sumOfRent - building.numberOfRoomsAndRent.dan[1] + "it was decided to increase Dan's rent to 1200");

    let increasedRent;
    increasedRent = building.numberOfRoomsAndRent.dan[1] = 1200;
} else {
    console.log("Since sum of rent of Sarah and David is " + sumOfRent + ", not bigger than Dan's rent, it was decided to keep Dan's rent at " + building.numberOfRoomsAndRent.dan[1]);
}

