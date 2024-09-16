const { users } = require('../config/data.js');

const getAllUsers = (req, res) => {
    res.json(users);
};

const getUsersById = (req, res) => {
    //console.log(req.params); // this will show the id in the console
    const { id } = req.params;
    const myuser = users.find((item) => item.id == id);
    if (!myuser) return res.sendStatus(404);
    res.json(myuser);
};

const deleteUsers = (req, res) => {
    const { id } = req.params;
    // remove the user from the list of users
    const index = users.findIndex((user) => user.id == id);
    users.splice(index, 1);
    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    // send back the list of all users updated
    res.json(users);
};

const putUsers = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    // update the product in the list of users
    const index = users.findIndex((user) => user.id == id);
    users[index] = { ...users[index], name, email };
    // send json with update information
    res.json(users);
};

const postUsers = (req, res) => {
    console.log(req.body);
    // res.send('ok from post');
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    // add the received user(s) to the list of users
    users.push(newUser);
    // send back the list of all users updated
    res.json(users);
};

const searchUsers = (req, res) => {
    // console.log(req.query);

    const { name } = req.query;
    const filtered = users.filter((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase());
    });
    if (filtered.length === 0) return res.sendStatus(404);

    res.send(filtered);
};

module.exports = {
    getAllUsers,
    getUsersById,
    deleteUsers,
    putUsers,
    postUsers,
    searchUsers,
};
