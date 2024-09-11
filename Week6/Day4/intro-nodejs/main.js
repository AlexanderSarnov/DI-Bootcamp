const { hello, getName } = require('./app.js'); // Using destructured assignment to import hello and getName functions from app.js 
// *If you don't use destructured assignment, you would have to write app.hello and app.getName. 

console.log(hello('Marry')); // gets an object with hello and getName functions
