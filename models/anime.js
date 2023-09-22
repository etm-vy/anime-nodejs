const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AnimeSchema = new Schema({
    name: String,
    genre: String,
    year: Number,
    status: String
});

module.exports = mongoose.model('Anime', AnimeSchema);