const hello = function () {
  console.log("Hello, world!");
};

// const hello1 = () => console.log("Hello, world!");

// hello();
// hello1();

console.log("Hello, Node!");
// will be instantly executed every time the module is imported

if (require.main === module) {
  console.log("Hello, Node!");
};
// this will not be executed unless hello.js is executed directly
// thus avoids execution from the app.js when calling hello func

module.exports = hello;
