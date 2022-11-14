let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with database model
let book = require('../models/books');

/* CRUD Operations */
module.exports.displayBookList = (req, res, next) => {
    book.find((err, bookList) => {
        if(err) {
            return console.error(err);
        }
        else {
            // console.log(bookList);
            res.render('book/list', {
                title:'Book List', 
                bookList: bookList
            });
        }
    });
}

