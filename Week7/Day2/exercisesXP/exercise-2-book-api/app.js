// app.js

const express = require('express');
const bookRoutes = require('./server/routes/bookRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.use('/api', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
