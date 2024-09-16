function make_pizza(size, ...toppings) {
  console.log(`\nMaking a ${size}-inch pizza with the following toppings:`)
  for (topping of toppings) {
      console.log("- " + topping);
  };
};

// make_pizza(12, 'pepperoni');
// make_pizza(16, 'mushrooms', 'cheese',);


module.exports = { make_pizza, };
