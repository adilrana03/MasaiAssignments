const mongoose = require('mongoose');

async function connectDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blogs');
    } catch (err) {
        console.log('error in initating in database', err.message);

        throw err;
    }
}

module.exports = connectDatabase;
