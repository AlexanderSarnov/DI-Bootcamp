const express = require('express');
// const { products } = require('../config/data.js'); // not required in this file because it's already defined in products.controllers.js file.

const { auth, logger } = require('../middlewares/utils.js');

const {
    getAllProducts,
    getProductById,
    deleteProduct,
    putProduct,
    postProduct,
    searchProducts,
} = require('../controllers/products.controller.js'); // establishing a new router for products.controller.js file.

const router = express.Router();

router.get('/', auth, getAllProducts); // from products.controller.js file. and using middleware auth to check if admin is present in the query string.

router.get('/:id', getProductById); // from products.controller.js file.

router.delete('/:id', deleteProduct);

router.put('/:id', putProduct);

router.post('/', postProduct);

router.get('/search', searchProducts);

module.exports = router;
