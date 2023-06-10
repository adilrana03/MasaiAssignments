// const mongoose = require('mongoose');

// const connectDatabase = async () => {
//     const result = await mongoose.connect('mongodb://localhost:27017/GROCERY');
//     return result;
// };

// module.exports = connectDatabase;

const mongoose = require('mongoose');

const connectDatabase = async () => {
    const result = await mongoose.connect('mongodb://localhost:27017/GROCERY');
    return result;
};

module.exports = connectDatabase;
