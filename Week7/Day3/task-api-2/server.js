// server.js
const express = require('express');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const userRoutes = require('./routes/userRoutes');
const configureBodyParser = require('./middleware/bodyParser');

const app = express();
const PORT = 3000;

configureBodyParser(app); // Use body-parser middleware

app.use('/api', userRoutes); // Use user routes with '/api' prefix
app.use(express.static('public')); // Serve static files from the public directory

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
