var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/answer/', function(req, res, next) {
  res.render('answer');
});
router.get('/api/answer/:id',function(req,res){
  fs.readFile( __dirname + '/../json/'+ req.params.id +'.json', function (err, data) {
    if (err) throw err;
    res.contentType('application/json');
    res.send(data);
  });
});
module.exports = router;
