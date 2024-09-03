// Instructions
// Part I

// Use the cars inventory below:
const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// Create a function getCarHonda(carInventory) that takes a single parameter.carInventory‘s value is an array which is an inventory of cars(see the array of objects below)
// The function should
// loop through the array of object and return the first car with the name “Honda”.
// then, return a string in the format This is a { car_make } { car_model } from { car_year }.
// Hint: Find an array method that returns the value of the first element in an array that pass a test.
function getCarHonda(carInventory) {
    const foundHonda = carInventory.find(car => car.car_make === "Honda");

    if (foundHonda) {
        const { car_make, car_model, car_year } = foundHonda; // Destructuring for concise string construction
        return `This is a ${car_make} ${car_model} from ${car_year}.`;
    } else {
        return "No Honda car found in the inventory.";
    }
}

const hondaCarString = getCarHonda(inventory);
console.log(hondaCarString); // Output: This is a Honda Accord from 1983.


// Part II

// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter.carInventory‘s value is an array which is an inventory of cars(see the array of objects below)
// the function should return an inventory that is sorted by car_year, ascending.
//     Hint : Check out this tutorial on the sort method
// The output should be
// [
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
// ];
function sortCarInventoryByYear(carInventory) {
    // Create a copy of the original array to avoid modifying it directly
    const sortedInventory = [...carInventory]; // using spread syntax
    sortedInventory.sort((carA, carB) => carA.car_year - carB.car_year); // use sort method
    return sortedInventory; // return instead of push in order not to modify the original array
};

const sortedCars = sortCarInventoryByYear(inventory);
console.log(sortedCars); // Output as expected (ascending order by car_year)