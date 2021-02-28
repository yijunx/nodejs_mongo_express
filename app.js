const express = require('express');
// create the app
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const postsRoute = require('./routes/posts')
require('dotenv/config')


app.use(bodyParser.json()); // this must come first before /posts
app.use('/posts', postsRoute);


// middlewares in express
// all middlewares are functions runs when routes are being hit
// we can always run a small function just after the end point being hit
// app.use('/posts', (req, res, next) => {
//     console.log('this is a middle ware running for /posts');
//     next();
// })


// routes
app.get('/', (req, res) => {
    res.send(`we are at home`);
});

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to DB!!!') // call back
);

// listen!
app.listen(3000);