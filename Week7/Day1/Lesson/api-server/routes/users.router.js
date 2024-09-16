const express = require('express');
// const { users} = require('../config/data.js'); // not required in this file because it's already defined in products.controllers.js file.
const {
    getAllUsers,
    getUsersById,
    deleteUsers,
    putUsers,
    postUsers,
    searchUsers,
} = require('../controllers/users.controller.js'); // establishing a new router for users.controller.js file.

const router = express.Router();

router.get('/users', getAllUsers); // from products.controller.js file.

router.get('/users/:id', getUsersById); // from users.controller.js file.

router.delete('/users/:id', deleteUsers);

router.put('/users/:id', putUsers);

router.post('/users', postUsers);

router.get('/search', searchUsers);

module.exports = router;
