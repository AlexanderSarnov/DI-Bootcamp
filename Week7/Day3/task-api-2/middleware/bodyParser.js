// middleware/bodyParser.js
const bodyParser = require('body-parser');

const configureBodyParser = (app) => {
    app.use(bodyParser.json());
};

module.exports = configureBodyParser;
