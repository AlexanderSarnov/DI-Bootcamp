// Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night.The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination: 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car.The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5 % discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//         Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

// Define hotel cost (without prompt and validation)
function hotelCost(nights) {
    const costPerNight = 140;
    return nights * costPerNight;
}

// Define plane cost (without prompt and validation)
function planeRideCost(destination) {
    const prices = { London: 183, Paris: 220 };
    return prices[destination] || 300;
}

// Define car rental cost (without prompt and validation)
function rentalCarCost(days) {
    const costPerDay = 40;
    let totalCost = days * costPerDay;
    if (days > 10) {
        totalCost *= 0.95; // Apply 5% discount
    }
    return totalCost;
}

// Define total vacation cost (with all prompts loops and data validation)
function totalVacationCost() {
    let nights, destination, days;

    do {
        nights = parseInt(prompt("How many nights would you like to stay at the hotel?"));
    } while (isNaN(nights) || nights <= 0);

    do {
        destination = prompt("What is your destination? (Enter 'London', 'Paris', or another city)");
    } while (!destination || typeof destination !== "string");

    do {
        days = parseInt(prompt("How many days would you like to rent a car?"));
    } while (isNaN(days) || days <= 0);

    const hotelCostResult = hotelCost(nights);
    const planeCostResult = planeRideCost(destination);
    const rentalCostResult = rentalCarCost(days);

    const totalCost = hotelCostResult + planeCostResult + rentalCostResult;
    console.log(`The car cost: $${rentalCostResult}, the hotel cost: $${hotelCostResult}, the plane tickets cost: $${planeCostResult}.`);
    console.log(`The total cost of your vacation is: $${totalCost}`);
}

totalVacationCost();