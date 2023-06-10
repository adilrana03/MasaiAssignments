const mongoose = require('mongoose')
async function connectDatabase() {

    const result = await mongoose.connect('mongodb://localhost:27017/instaData');

    return result;
}

module.exports = connectDatabase;