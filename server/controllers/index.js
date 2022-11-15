let express = require('express');
let router = express.Router();

module.exports.displaySplashPage = (req, res, next) => {
    res.render('index', { title: 'Splash' });
}