var express = require('express');
var router = express.Router();

router.post('/about.ejs', function(req, res, next){
    res.render('about');
});

module.exports = router