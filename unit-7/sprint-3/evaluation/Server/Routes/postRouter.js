const express = require('express');

const {
    createBlog,
    getPost,
    updatePost,
    deletePost,
} = require('../Middlewares/post');

const Router = express.Router();

Router.get('/post', getPost);
Router.post('/createpost', createBlog);
Router.put('/updatepost/:id', updatePost);
Router.delete('/deletepost/:id', deletePost);

module.exports = Router;
