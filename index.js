const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./database');

const AnimesRouter = require('./routes/animes');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/animes', AnimesRouter);

app.listen(8001, () => {
    console.log('Listening on 8001');
});