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

// Define hotel cost (without prompt)
function hotelCost(nights) {
    if (isNaN(nights) || nights <= 0) {
        return "Invalid number of nights. Please enter a positive number.";
    }

    const costPerNight = 140;
    const totalCost = nights * costPerNight;
    return totalCost;
}

// Define plane cost (without prompt)
function planeRideCost(destination) {
    if (!destination || typeof destination !== "string") {
        return "Invalid destination. Please enter a valid city name.";
    }

    const prices = {
        London: 183,
        Paris: 220,
    };

    const defaultPrice = 300;
    const ticketPrice = prices[destination] || defaultPrice;
    return ticketPrice;
}

// Define car rental cost (without prompt)
function rentalCarCost(days) {
    if (isNaN(days) || days <= 0) {
        return "Invalid number of days. Please enter a positive number.";
    }

    const costPerDay = 40;
    let totalCost = days * costPerDay;

    if (days > 10) {
        totalCost *= 0.95; // Apply 5% discount
    }

    return totalCost;
}

// Define total vacation cost (with all prompts loops and data validation)
function totalVacationCost() {
    let nights;
    let destination;
    let days;

    do {
        nights = parseInt(prompt("How many nights would you like to stay at the hotel?"));

        if (typeof nights !== "number" || nights <= 0) {
            console.error("Invalid number of nights. Please enter a positive number.");
        }
    } while (typeof nights !== "number" || nights <= 0);

    do {
        destination = prompt("What is your destination? (Enter 'London', 'Paris', or another city)");

        if (!destination || typeof destination !== "string") {
            console.error("Invalid destination. Please enter a valid city name.");
        }
    } while (!destination || typeof destination !== "string");

    do {
        days = parseInt(prompt("How many days would you like to rent a car?"));

        if (typeof days !== "number" || days <= 0) {
            console.error("Invalid number of days. Please enter a positive number.");
        }
    } while (typeof days !== "number" || days <= 0);

    const hotelCostResult = hotelCost(nights);
    const planeCostResult = planeRideCost(destination);
    const rentalCostResult = rentalCarCost(days);

    let totalCost = 0;
    let errorMessage = "";

    if (typeof hotelCostResult === "string") {
        errorMessage = hotelCostResult;
    } else {
        totalCost += hotelCostResult;
    }

    if (typeof planeCostResult === "string") {
        errorMessage += (errorMessage ? "\n" : "") + planeCostResult;
    } else {
        totalCost += planeCostResult;
    }

    if (typeof rentalCostResult === "string") {
        errorMessage += (errorMessage ? "\n" : "") + rentalCostResult;
    } else {
        totalCost += rentalCostResult;
    }

    if (errorMessage) {
        console.error(errorMessage);
    } else {
        console.log(`The car cost: $${rentalCostResult}, the hotel cost: $${hotelCostResult}, the plane tickets cost: $${planeCostResult}.`);
        console.log(`The total cost of your vacation is: $${totalCost}`);
    }
}

totalVacationCost();