var express = require('express');
var router = express.Router();
var data = require('../sampleData/artists.json');


router.get('/:id', (req, res, next) => {
    let artist = data.artist[req.params.id];
    if (artist === undefined){
       res.send('data not found');
    }
    else {
       res.render('movie', artist);
    }  
});

module.exports = router;