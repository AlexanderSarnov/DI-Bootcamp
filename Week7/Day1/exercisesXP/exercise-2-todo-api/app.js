// app.js

const express = require('express');
const todosRouter = require('./routes/todos'); // Import the router module

const app = express();

app.use(express.json());

const PORT = 3000;

// Mount the router module
app.use('/todos', todosRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
