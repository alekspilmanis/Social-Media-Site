// import mongoose
const mongoose = require("mongoose");

// create schema
const postSchema = new mongoose.Schema({
  postContent: {type: String, required: true},
})

// create model
const Post = mongoose.model("Post", postSchema);

//CRUD functions

//Create a post
async function createPost(postContent, userID){
    const newPost = await Post.create({
        postContent: postContent
    });

    return newPost;
}

//Read a post--searching by post ID for now
async function readPost(id){
    const post = await Post.findOne({"_id": id});
    if(!post) throw Error("post does not exist");

    return post;
}

//Update a post-
async function updatePost(postId, updatedContent){
    const post = await Post.findOne({"_id": postId});
    if(!post) throw Error("post does not exist");

    const updatedPost = await Post.updateOne({"_id": postId}, {$set: {postContent: updatedContent}});

    return updatedPost;
}

//Delete a post
async function deletePost(postId){
    const post = await Post.findOne({"_id": postId});
    if(!post) throw Error("post does not exist");

    await Post.deleteOne({"_id": postId});
}

//Export functions
module.exports = {createPost, readPost, updatePost, deletePost};