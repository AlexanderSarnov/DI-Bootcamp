// routes/todos.js

const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
let todos = [];

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find((t) => t.id === todoId);
    if (todo) {
        todo.task = req.body.task || todo.task;
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
        res.json(todo);
    } else {
        res.status(404).send('To-do item not found');
    }
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex((t) => t.id === todoId);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('To-do item not found');
    }
});

module.exports = router;
