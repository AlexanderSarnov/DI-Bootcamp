const { products } = require('../config/data.js');

const _getAllProducts = require('../models/products.model.js');

const getAllProducts = (req, res) => {
    // res.json(products);
    _getAllProducts()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ message: 'Error getting products', error: err }));
};

const getProductById = (req, res) => {
    //console.log(req.params); // this will show the id in the console
    const { id } = req.params;
    const myproduct = products.find((item) => item.id == id);
    if (!myproduct) return res.sendStatus(404);
    res.json(myproduct);
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    // remove the product from the list of products
    const index = products.findIndex((product) => product.id == id);
    products.splice(index, 1);
    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    // send back the list of all products updated
    res.json(products);
};

const putProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    // update the product in the list of products
    const index = products.findIndex((product) => product.id == id);
    products[index] = { ...products[index], name, price };
    // send json with update information
    res.json(products);
};

const postProduct = (req, res) => {
    console.log(req.body);
    // res.send('ok from post');
    const { name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    // add the received product(s) to the list of products
    products.push(newProduct);
    // send back the list of all products updated
    res.json(products);
};

const searchProducts = (req, res) => {
    // console.log(req.query);

    const { name } = req.query;
    const filtered = products.filter((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase());
    });
    if (filtered.length === 0) return res.sendStatus(404);

    res.send(filtered);
};

module.exports = {
    getAllProducts,
    getProductById,
    deleteProduct,
    putProduct,
    postProduct,
    searchProducts,
};
