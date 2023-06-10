// const mongoose = require('mongoose');

// const Grocery = mongoose.model('Grocery', {
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     description: String,
//     category: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     price: {
//         type: Number,
//         require: true,
//         trim: true,
//     },
//     image: String,
//     quantity: {
//         type: Number,
//         require: true,
//         trim: true,
//     },
//     rating: Number,
// });

// module.exports = Grocery;

const mongoose = require('mongoose');

const Grocery = mongoose.model('Grocery', {
    name: String,
    description: String,
    quantity: Number,
    rating: Number,
    image: String,
    price: String,
});

module.exports = Grocery;
