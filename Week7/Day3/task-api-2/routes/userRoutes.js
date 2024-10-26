const express = require('express');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const router = express.Router();

const usersFilePath = './users.json';

// Register route
router.post('/register', (req, res) => {
    console.log('Register endpoint hit');
    const { username, password } = req.body;
    console.log('Request body:', req.body);

    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    fs.readFile(usersFilePath, (err, data) => {
        if (err) {
            console.error('Error reading users file:', err);
            return res.status(500).send('Error reading users file');
        }

        const users = JSON.parse(data);
        const userExists = users.find((user) => user.username === username);

        if (userExists) {
            return res.status(400).send('Username already exists');
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        users.push({ username, password: hashedPassword });

        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing users file:', err);
                return res.status(500).send('Error writing users file');
            }

            res.send('User registered successfully');
        });
    });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    fs.readFile(usersFilePath, (err, data) => {
        if (err) return res.status(500).send('Error reading users file');

        const users = JSON.parse(data);
        const user = users.find((user) => user.username === username);

        if (!user) return res.status(400).send('Invalid username or password');

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) return res.status(400).send('Invalid username or password');

        res.send('Login successful');
    });
});

// Get all users
router.get('/users', (req, res) => {
    fs.readFile(usersFilePath, (err, data) => {
        if (err) return res.status(500).send('Error reading users file');

        const users = JSON.parse(data);
        res.json(users);
    });
});

// Get a specific user by ID
router.get('/users/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile(usersFilePath, (err, data) => {
        if (err) return res.status(500).send('Error reading users file');

        const users = JSON.parse(data);
        const user = users[id];

        if (!user) return res.status(404).send('User not found');

        res.json(user);
    });
});

// Update a specific user by ID
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    fs.readFile(usersFilePath, (err, data) => {
        if (err) return res.status(500).send('Error reading users file');

        const users = JSON.parse(data);
        const user = users[id];

        if (!user) return res.status(404).send('User not found');

        user.username = username || user.username;
        if (password) user.password = bcrypt.hashSync(password, 10);

        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
            if (err) return res.status(500).send('Error writing users file');

            res.send('User updated successfully');
        });
    });
});

module.exports = router;
