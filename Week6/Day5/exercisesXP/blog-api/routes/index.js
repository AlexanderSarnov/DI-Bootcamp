// routes/index.js

const express = require('express');
const router = express.Router();

let blogPosts = require('../data/data.js');

// Utility function to write to the data file
const fs = require('fs');
const path = require('path');
const DATA_FILE_PATH = path.join(__dirname, '..', 'data', 'data.js');
function writeDataToFile() {
    const dataToWrite = `module.exports = ${JSON.stringify(blogPosts, null, 2)}`;
    fs.writeFile(DATA_FILE_PATH, dataToWrite, (err) => {
        if (err) {
            console.error('Error writing to data file:', err);
        } else {
            console.log('Data saved successfully.');
        }
    });
}

// GET /posts: Return a list of all blog posts
router.get('/posts', (req, res) => {
    res.json(blogPosts);
});

// GET /posts/:id: Return a specific blog post based on its id
router.get('/posts/:id', (req, res) => {
    const post = blogPosts.find((p) => p.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// POST /posts: Create a new blog post
router.post('/posts', (req, res) => {
    const newPost = {
        id: blogPosts.length + 1,
        title: req.body.title,
        content: req.body.content,
    };
    blogPosts.push(newPost);
    writeDataToFile();
    res.status(201).json(newPost);
});

// PUT /posts/:id: Update an existing blog post
router.put('/posts/:id', (req, res) => {
    const post = blogPosts.find((p) => p.id === parseInt(req.params.id));
    if (post) {
        post.title = req.body.title;
        post.content = req.body.content;
        writeDataToFile();
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// DELETE /posts/:id: Delete a blog post
router.delete('/posts/:id', (req, res) => {
    const postIndex = blogPosts.findIndex((p) => p.id === parseInt(req.params.id));
    if (postIndex !== -1) {
        blogPosts.splice(postIndex, 1);
        writeDataToFile();
        res.status(204).send();
    } else {
        res.status(404).send('Post not found');
    }
});

module.exports = router;
