const express = require('express');
const { products, users } = require('./config/data.js');
const productRouter = require('./routes/products.router.js'); // establishing a new router for products
const userRouter = require('./routes/products.router.js');
const { auth, logger } = require('./middlewares/utils.js');

// console.log(products);
// console.log(users);

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});

//* Body parser - without it no way to see request from body of a request.
app.use(express.json()); // using express.json from express.module - is a call for bodyParser library

app.use('/', express.static(__dirname + '/public')); // to serve static files from public folder

app.use(logger); // will see in console every request to the server with url and method

app.use('/products/api', auth); // middleware to check if admin is present in the query string, what will be called after this funciionh is executed only if admin is present in the query string. But if in the query admin === "true", it will be ok! (in current example it checks for specific endpoints to be with authorization)

app.use('/products', productRouter); // to avoid conflict with other routes adding /products before productRouter
app.use('/users', userRouter);

/**
 * CRUD - restful API
 * C - create - POST
 * R - Read - GET
 * U - update - PUT
 * D - delete - DELETE
 */

/** delete product */
// app.delete('/products/:id', (req, res) => {
//     const { id } = req.params;
//     // remove the product from the list of products
//     const index = products.findIndex((product) => product.id == id);
//     products.splice(index, 1);
//     if (index === -1) {
//         return res.status(404).json({ message: 'Product not found' });
//     }
//     // send back the list of all products updated
//     res.json(products);
// });

/** update product */
// app.put('/products/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, price } = req.body;

//     // update the product in the list of products
//     const index = products.findIndex((product) => product.id == id);
//     products[index] = { ...products[index], name, price };
//     // send json with update information
//     res.json(products);
// });

// create a new product -> POST request
// app.post('/products', (req, res) => {
//     console.log(req.body);
//     // res.send('ok from post');
//     const { name, price } = req.body;
//     const newProduct = { id: products.length + 1, name, price };
//     // add the received product(s) to the list of products
//     products.push(newProduct);
//     // send back the list of all products updated
//     res.json(products);
// }); // to parse to body we need a library - body-parser, it is inside the express from version 4.0

// /** Read - GET all */ ---> moved to products.router.js file.
// app.get('/products', (req, res) => {
//     res.json(products);
// }); // display json on the page.

// To test the API use postman.
// log in to postman, go to GET request, paste the url "http://localhost:3001

// http://localhost:3001/products/2 - request in postman will return nothing before we propwely setup our Api.

// app.get('/products/:id', (req, res) => {
//     //console.log(req.params); // this will show the id in the console
//     const { id } = req.params;
//     const myproduct = products.find((item) => item.id == id);
//     if (!myproduct) return res.sendStatus(404);
//     res.json(myproduct);
// }); // to display a single product.

// from request from postman http://localhost:3001/products/3/phone we are sending to console.log parameters with values from request and replying to the request with {msg: "ok"}

// app.get('/search', (req, res) => {
//     // console.log(req.query);

//     const { name } = req.query;
//     const filtered = products.filter((item) => {
//         return item.name.toLowerCase().includes(name.toLowerCase());
//     });
//     if (filtered.length === 0) return res.sendStatus(404);

//     res.send(filtered);
// });

// create a new product -> POST request

/**
 * server
 * |_ config - connection to database
 * |_ models - schema for products (queries to db)
 * |_ controllers - handle requests and interact with models (request,response)
 * |_ routes - define endpoints (api endpoints)(route for api)
 */
