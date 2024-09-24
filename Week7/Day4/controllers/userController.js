const userModel = require('../models/userModel.js');

const bcrypt = require('bcrypt');

moduile.exports = {
    registerUser: async (req, res) => {
        const { username, password, email, first_name, last_name } = req.body;

        const user = { username, password, email, first_name, last_name };

        try {
            const userInfo = await userModel.createUser({ username, password, email, first_name, last_name });
            res.status(202).json({
                message: 'User registered successfully',
                user: userInfo,
            });
        } catch (error) {
            console.error(error);
            if (error.code == 23505) {
                return res.status(200).json({ message: 'Email or Username already exist' });
            }
            res.status(500).json({ error: 'internal server error' });
        }
    },
};
