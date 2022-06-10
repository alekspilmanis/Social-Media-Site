// import mongoose
const mongoose = require("mongoose");

// create schema
const postSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  postContent: {type: String, required: true},
  dateCreated: {type: Date, default: Date.now}
})

// create model
const Post = mongoose.model("Post", postSchema);

//CRUD functions

//Create a post
async function createPost(userId, postContent){
    const newPost = await Post.create({
        userId: userId,
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

//Update a post--validates that a user's ID matches with the one that created the original post
async function updatePost(userId, postId, updatedContent){
    const post = await Post.findOne({"_id": postId});
    if(!post) throw Error("post does not exist");
    if(post.userId!=userId) throw Error("not authorized to edit this post");

    const updatedPost = await Post.updateOne({"_id": postId}, {$set: {postContent: updatedContent}});

    return updatedPost;
}

//Delete a post--also validates userId
async function deletePost(userId, postId){
    const post = await Post.findOne({"_id": postId});
    if(!post) throw Error("post does not exist");
    if(post.userId!=userId) throw Error("not authorized to delete this post");

    await Post.deleteOne({"_id": postId});
}

//Export functions
module.exports = {createPost, readPost, updatePost, deletePost};