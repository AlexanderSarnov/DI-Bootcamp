// Exercise 2 : Shopping List
// Instructions
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList.In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if ..in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

// 1. Create a shoppping list
const shoppingList = ["banana", "orange", "apple"];

// 2. Declare function myBill inluding bonus task
function myBill() {
    let totalPrice = 0;

    for (const item of shoppingList) {
        if (item in stock && stock[item] > 0) { // Check if item is in stock and available
            const price = prices[item];
            totalPrice += price;
            stock[item]--; // Decrement stock by 1 (bonus task)
        } else {
            console.log(`${item} is out of stock`);
        }
    }
    return totalPrice;
}

// 3. Declare a constant to store function result and call it
const totalCost = myBill();
console.log("Total Bill:", totalCost);