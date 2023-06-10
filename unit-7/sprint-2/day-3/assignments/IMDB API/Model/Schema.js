const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const movieschema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: Number, required: true },
    genre: [{ type: String, required: true }],
});
movieschema.index({ title: 'text' });

const Movies = mongoose.model('Movies', movieschema);

module.exports = Movies;
