const products = [
    { id: 1, name: 'iPhone', price: 900 },
    { id: 2, name: 'iPad', price: 900 },
    { id: 3, name: 'iWatch', price: 900 },
];

module.exports = {
    products, // Exporting the products array. This can be imported in other files using require(). For example, const products = require('./products');
};
