const express = require('express');
// const { getUsers } = require('./info');

const app = express();

const PORT = 3001; // Change port freely from 3001 and further

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});

// When running nodemon server.js - will have a message in the terminal;

// app.get()
// app.post()

// request - response pattern (req,res)
app.get('/', (req, res) => {
    // it can be /home, /about, /contact etc. in current case from localhost:3001 page in browser will see "my first server" message on the screen
    response.send('<h1>my first server</h1>');
});

const products = [
    { id: 1, name: 'iPhone', price: 900 },
    { id: 2, name: 'iPad', price: 900 },
    { id: 3, name: 'iWatch', price: 900 },
];

app.get('/products', (req, res) => {
    // console.log(req);
    res.send(products); // can use res.json(products) for json format. (will not collect elements restricted for JSON format)
}); // will return all products on the page.

// app.get('/users', (req, res) => {
//     getUsers('https://jsonplaceholder.typicode.com/users')
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((error) => console.log(error));
// }); // !does not work, need debugging

// console.log(__dirname);

app.use('/', express.static(__dirname + '/public')); // serve static files from public folder.));

app.get('/', (req, res) => {
    res.send('from root');
});

app.get('/aboutme', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
}); // change the name of about.html to any other file name in the browser path to file
// *res.sendFile('/public/about.html', {root: __dirname});) - another syntaxis for the same purpose.
