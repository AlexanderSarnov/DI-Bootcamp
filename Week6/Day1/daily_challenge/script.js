// **Just followed the video instructions, because my original solution was way too messy in the way of how I was trying to explain the concepts

let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

const displayGroceries = (obj) => {
    const fruits = obj.fruits
    fruits.forEach(fruit => console.log(fruit))
}

displayGroceries(groceries);

const cloneGroceries = () => {
    let user = client; // User === John
    user = "Betty";
    const shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.paid = false;

    // Display user and client variables for comparison
    console.log("user", user, "client", client);
    // Display variables for comparison (they actually both reference to the same allocated memory)
    console.log("shopping", shopping);
    console.log("groceries", groceries);
}

cloneGroceries() 