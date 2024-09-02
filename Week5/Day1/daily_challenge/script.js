let client = 'John';

const groceries = {
    fruits: ['pear', 'apple', 'banana'],
    vegetables: ['tomatoes', 'cucumber', 'salad'],
    totalPrice: '20$',
    other: {
        paid: true,
        meansOfPayment: ['cash', 'creditCard'],
    },
};

const displayGroceries = (obj) => {
    const fruits = obj.fruits;
    console.log('Fruits are:');
    fruits.forEach((fruit) => console.log(fruit));
};

displayGroceries(groceries);

const cloneGroceries = () => {
    let user = client; // user === John
    client = 'Betty'; // client === Betty
    const shopping = groceries;
    shopping.totalPrice = '35$';
    shopping.other.paid = false;

    // Display user and client variables for comparison
    console.log('\nuser: ', user, '\nclient: ', client);
    // Primitive Values: user and client are primitive string values. When user is assigned the value of client, it gets a copy of the value. Changing client later does not affect user.
    console.log('----------------------------------------------------------');
    // delimitered line for clarity

    console.log(
        '\nshopping: ',
        shopping,
        '\ngroceries: ',
        groceries,
        '\nare groceries and shopping exactly the same? : ',
        groceries === shopping
    );
    // Object References: shopping and groceries are references to the same object in memory. Changes to shopping affect groceries and vice versa.
};

cloneGroceries(); // calling the function to test the changes made to the cloned object and the original object.
