const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//get back the data
router.get('/',async (req,res) => {
  try{
   const posts = await Post.find();
   res.json(posts);
  }catch(err){
   res.json({message: err})
  }
});


//send and make new data
router.post('/', async (req,res) => {
  const post = new Post({
   title: req.body.title,
   description: req.body.description
  });
  try {
   const savedPost = await post.save();
   res.json(savedPost);
  }catch(err){
   res.json({message:err});
  }

});

//specific post by id 

router.get('/:postId',async (req,res) => {
 try{
   const post = await Post.findById(req.params.postId);
   res.json(post);
 }catch(err){
   res.json({message: err});
 }
})

//delete post by id 

router.delete('/:postId',async (req,res) => {
try{
  const post = await Post.findByIdAndDelete(req.params.postId);
  res.json(post);
}catch(err){
 res.json({message:err});
}
})

//update a post
router.patch('/:postId',async(req,res)=> {
 try{
  const updatedPost= await Post.updateOne(
   { _id: req.params.postId },
   { $set:{ title:req.body.title } }
   );
   res.json(updatedPost);
 }catch(err){
  res.json({message:err});
 }
});

module.exports = router;