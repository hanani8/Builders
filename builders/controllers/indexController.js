var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var Comment = require('../models/comments');
var mongoose = require('mongoose');

exports.user = function(req, res) {

    var posts = new Post(req.body);

    posts.save();
    res.send(posts);


    
    // Post.findOneAndUpdate({Title: 'd'}, { $push : { Comments: req.body.Comments}}, { useUnifiedTopology: true }, function(err){
    //     console.log("The Bitch aint working");
    //     console.log(err);
    //     res.send(req.body);
    //   });
    
};

exports.links = function(req,res) {
    Post.find({},function(err,data){
        if(err){
            console.log("Something went wrong")
        }
        else{
            res.render('index', {data});
        }
    })
}

exports.saveComments = function(req,res){
    // Comment.findOneAndUpdate({_id: '5e18472fdede881918211382'}, { $push : { Comment : req.body.Comment}}, { useUnifiedTopology: true }, function(err){
    //        console.log("The Bitch aint working");
    //         console.log(err);
    //         res.send(req.body); 
    var comments = new Comment(req.body);
    comments.save();
    res.send(comments);
  
};

exports.comments = function(req,res){
    Post.find({}).populate('CommentsIds').exec(function(err, posts, count){
        if(err){
            console.log("DONT KNOW WHY BUT BITCH AINT WORKING")
        }
        else{
        res.render( 'index', {posts})
        }
        })
    };