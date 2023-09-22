const express = require('express');
let anime = require('../models/anime');
const router = express.Router();
AnimeSchema = require('../models/anime');

function HandleError(response, reason, message, code){
    console.log('ERROR: ', reason);
    response.status(code || 500).json({"error": message});
}

router.get('/', (request, response) => {
    AnimeSchema.find().then((animes) => {
        response.send(animes);
    }).catch((error) => {
        HandleError(response, "error retrieving data", "get failed", 500);
    });
});

router.post('/',(request, response) => {
    const animeJSON = request.body;
    if (!animeJSON.name || !animeJSON.genre){
        HandleError(response, "missing information", "post data missing", 500);
    } else{
        anime = new AnimeSchema({
            name: animeJSON.anime,
            genre: animeJSON.genre,
            year: animeJSON.year,
            status: animeJSON.status
        });
        anime.save().then((AnimeSchema) => {
            response.send({"id": anime.id});
        }).catch((error) => {
            response.send({"error": error});
        });
    }
});

module.exports = router;