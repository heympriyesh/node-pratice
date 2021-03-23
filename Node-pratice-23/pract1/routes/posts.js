const express = require('express');
const { remove } = require('../models/Post');
const router = express.Router();
const Post = require('../models/Post');


//Get all the post
router.get('/', async (req, res) => {
    try{
        const posts=await Post.find();
        res.json(posts)
    } catch(err){
        res.json({message:err})
    }
})
//Submit the post
router.post('/',async (req,res)=>{
        const post=new Post({
            title: req.body.title,
            description:req.body.description
        });
        try{
            const savedPost= await post.save();
            res.json(savedPost);
        } catch(err){
            res.json({message:err})
        }

    // const post=new Post({
    //     title:req.body.title,
    //     description:req.body.description
    // })
    // post.save()
    // .then(data=>{
    //     res.json(data);
    // })
    // .catch(err=>{
    //     res.json({message: err});
    // })
    // console.log(req.body);
})

//specific post
router.get('/:postId', async (req,res)=>{
    try{
        const post=await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err})
    }
    console.log(req.params.postId);
})
//Delete Post
router.delete('/:postID',async (req,res)=>{
    try{
        const removePost=await Post.remove({_id:req.params.postID})
        res.json(removePost);
    }catch(err){
        res.json({message:err})
    }
})

//Update a post
router.patch('/:postID',async (req,res)=>{
    console.log("Update on this",req.params.postID)
    try{
        const updatedPost=await Post.updateOne(
            { _id: req.params.postID},
            {$set:{title:req.body.title}}
        )
        res.json(updatedPost)
    }catch(err){
        res.json({message:err});
    }
})
module.exports = router;