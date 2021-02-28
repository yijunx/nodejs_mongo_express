const express = require('express');
const Post = require('../models/Post');


const router = express.Router();


router.get('/', (req, res) => {
    res.send(`we are at posts`);
});

// router.get('/:specific', (req, res) => {
//     const { specific } = req.params
//     res.send(`we are at posts / ${specific}`);
// });

router.post('/', (req, res) => {
    // const post = req.body
    console.log(req.body)
});

module.exports = router;