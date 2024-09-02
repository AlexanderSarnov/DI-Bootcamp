const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

// same as in exercise 2, sum of two values 30 and 1 is 31.
console.log(curriedSum(30)(1));
