const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// get all
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();  // means find all, can add limit, offset later
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
});

// router.get('/:specific', (req, res) => {
//     const { specific } = req.params
//     res.send(`we are at posts / ${specific}`);
// });


// post a post
router.post('/', async (req, res) => {
    // const post = req.body
    // not gonna work by default, need a body parser as middleware
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

// specific post
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId)
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});


// delete a post
router.delete('/:postId', async (req, res) => {
    // console.log(req.params.postId)
    try {
        const r = await Post.remove({_id: req.params.postId});
        res.json(r);
    } catch (err) {
        res.json({message: err});
    }
});


router.patch('/:postId', async (req, res) => {
    // console.log(req.params.postId)
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;