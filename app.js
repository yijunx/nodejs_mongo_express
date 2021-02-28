const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config')

// create the app
const app = express();


// import routes
const postsRoute = require('./routes/posts')


app.use('/posts', postsRoute);
// middlewares in express
// all middlewares are functions runs when routes are being hit
// we can always run a small function just after the end point being hit
// app.use('/posts', (req, res, next) => {
//     console.log('this is a middle ware running for /posts');
//     next();
// })

const mongodb_connect_string = 'mongodb://admin:admin@mongodb/test_db'

// routes
app.get('/', (req, res) => {
    res.send(`we are at home`);
});

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => console.log('connected to DB!!!') // call back
);

// listen!
app.listen(3000);