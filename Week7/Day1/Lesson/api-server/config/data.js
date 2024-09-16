const products = [
    { id: 1, name: 'iPhone', price: 900 },
    { id: 2, name: 'iPad', price: 900 },
    { id: 3, name: 'iWatch', price: 900 },
];

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' },
];

module.exports = {
    products, // Exporting the products array. This can be imported in other files using require(). For example, const products = require('./products');
    users, // Exporting the users array. This can be imported in other files using require(). For example, const users = require('./users');
};
