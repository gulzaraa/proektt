var express = require('express');
var router = express.Router();
 router.get('/', function(req, res, next) {
     res.render('index');
   });
  router.post("/", function(req, res, next) {
    console.log(req.body);
    res.render("voyti", req.body);
    
  })
  module.exports = router;
  