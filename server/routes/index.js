let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

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