let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with database model
let book = require('../models/books');

/* CRUD Operations */
module.exports.displayDatabase = (req, res, next) => {
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

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', {
        title: 'Add Book' 
    });
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    book.create(newBook, (err, book) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/book-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    book.findById(id, (err, bookToEdit) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('book/edit', {
                title: 'Edit Book',
                book: bookToEdit
            });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updateBook = book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    book.updateOne({_id: id}, updateBook, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/book-list'); // res.redirect(book/list);
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    book.deleteOne({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/book-list'); // res.redirect(book/list);
        }
    });
}