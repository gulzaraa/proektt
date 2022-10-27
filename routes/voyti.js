var express = require('express');
var router = express.Router();
let users = [];
 router.get('/', function(req, res, next) {
     res.render('voyti');
   });
  router.post("/", function(req, res, next) {
    console.log(req.body);
    users.push(req.body)
    res.send(users)
    
    
  })
  module.exports = router;
  