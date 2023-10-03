const mongoose = require('mongoose');
const url = 'mongodb://[admin:ANCcvl12114@]node13644-my-anime.us.reclaim.cloud/animes';

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection; 

db.once('open', () => {
    console.log('Connected to Database');
});

db.on('error',(error) => {
    console.error('Connection error: ', error);
});

module.exports = db;
