import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();
const tasksFilePath = path.join(__dirname, '../tasks.json');

// Helper function to read tasks from the JSON file
const readTasks = () => {
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    return JSON.parse(data);
};

// Helper function to write tasks to the JSON file
const writeTasks = (tasks) => {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

// GET /tasks: Retrieve a list of all tasks
router.get('/', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// GET /tasks/:id: Retrieve a specific task by ID
router.get('/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).send('Task not found');
    }
    res.json(task);
});

// POST /tasks: Create a new task
router.post('/', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    const tasks = readTasks();
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

// PUT /tasks/:id: Update a task by ID
router.put('/:id', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    const tasks = readTasks();
    const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).send('Task not found');
    }
    tasks[taskIndex] = {
        id: parseInt(req.params.id),
        title,
        description,
    };
    writeTasks(tasks);
    res.json(tasks[taskIndex]);
});

// DELETE /tasks/:id: Delete a task by ID
router.delete('/:id', (req, res) => {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).send('Task not found');
    }
    tasks.splice(taskIndex, 1);
    writeTasks(tasks);
    res.status(204).send();
});

export default router;
