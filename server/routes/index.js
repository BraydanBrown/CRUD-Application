var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Splash' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Splash' });
});

router.get('/crud', function(req, res, next) {
  res.render('crud', { title: 'CRUD' });  
});

module.exports = router;