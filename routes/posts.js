const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req, res) => {
    res.send(`we are at posts`);
});

// router.get('/:specific', (req, res) => {
//     const { specific } = req.params
//     res.send(`we are at posts / ${specific}`);
// });

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

module.exports = router;