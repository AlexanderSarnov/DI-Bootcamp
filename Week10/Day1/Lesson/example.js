const sum = (a, b) => {
    return a + b;
};

console.log(sum(5, '5'));

// this will return 55, instead of compiling error, thus we will see error only upon runtime!

console.log(sum(5, 5)); // this will return 10, as expected.

// need config file to compile ts to js with ES6
// tsc -watch : will compile ts to js with ES6 automatically upon change
