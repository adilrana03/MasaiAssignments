const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
let postSchema = new mongoose.Schema({
    title: { type: String },
    body: { type: String },
    device: { type: String },
});

let post = mongoose.model('Post', postSchema);
module.exports = post;
