// server/routes/postRoutes.js

const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPost);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
