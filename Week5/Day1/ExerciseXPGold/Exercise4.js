const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);

// Output = 17 (similar exercise, boring)
console.log(add5(12));
