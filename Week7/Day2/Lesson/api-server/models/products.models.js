const { db } = require('../config/datab.js');

const _getAllProducts = () => {
    return db('products').select('id', 'name', 'price').orderBy('id').limit(10);
};

module.exports = {
    _getAllProducts,
};
