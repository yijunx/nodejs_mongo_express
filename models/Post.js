const mongoose = require('mongoose');


// describe how the data looks
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    },
})

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model('Posts', PostSchema)
module.exports = mongoose.model('Users', UserSchema)