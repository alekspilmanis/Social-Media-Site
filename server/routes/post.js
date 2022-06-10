const express = require("express");
const Post = require('../models/post');
const router = express.Router();

router
  .post('/readPost', async (req, res) => {
    try {
      const post = await Post.readPost(req.body.id);
      res.send({post});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/createPost', async (req, res) => {
    try {
      const post = await Post.createPost(req.body.userId, req.body.postContent);
      res.send({post});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/updatePost', async (req, res) => {
    try {
      const post = await Post.updatePost(req.body.userId, req.body.postId, req.body.updatedContent);
      res.send({post});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/deletePost', async (req, res) => {
    try {
      await Post.deletePost(req.body.userId, req.body.postId);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  module.exports = router;