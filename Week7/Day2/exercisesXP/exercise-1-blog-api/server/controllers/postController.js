// server/controllers/postController.js

const postModel = require('../models/postModel');

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching posts' });
    }
};

const getPost = async (req, res) => {
    try {
        const post = await postModel.getPostById(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the post' });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = await postModel.createPost(title, content);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the post' });
    }
};

const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedPost = await postModel.updatePost(req.params.id, title, content);
        if (updatedPost) {
            res.json(updatedPost);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the post' });
    }
};

const deletePost = async (req, res) => {
    try {
        await postModel.deletePost(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the post' });
    }
};

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};
