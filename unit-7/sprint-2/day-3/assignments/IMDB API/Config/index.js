const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

let connection = async () => {
    await mongoose.connect('mongodb://localhost:27017/movies');
};

module.exports = connection;
