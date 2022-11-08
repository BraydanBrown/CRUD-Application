let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to Book Model
let book = require('../models/books');

// Read Operation
// Get route for the book list page - READ Operation

// router.get("/book/create", book_)

// READ OPERATION
router.get('/', (req, res, next) => {
    book.find((err, bookList) => {
        if(err) {
            return console.error(err);
        }
        else {
            console.log(bookList);
            res.render('book/list', {
                title:'Book List', 
                bookList: bookList
            });
        }
    });
});

// ADD OPERATION
// get route for displaying the Add-Page Content
router.get('/add', (req, res, next) => {
    res.render('book/add', {
        title: 'Add Book'
    });
});

// post route for processing the Add-Page Content
router.post('/add', (req, res, next) => {
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
            res.redirect('/book-list'); // res.redirect(book/list);
        }
    });
});

// EDIT OPERATION
// get route for processing the Edit-Page Content
router.get('/edit/:id', (req, res, next) => {
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

});

// post route for processing the Edit-Page Content
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    let updatedBook = book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    book.updateOne({_id: id}, updatedBook, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/book-list'); // res.redirect(book/list);
        }
    });
});

// DELETE OPERATION
// get route deleting content
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    book.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/book-list'); // res.redirect(book/list);
        }
    });
});












// router.post('/book-list', function(req, res, next) {
//     req.assert('name', 'Name is required').notEmpty();
//     req.assert('author', 'Author is required').notEmpty();
//     req.assert('published', 'Published is required').notEmpty();
//     req.assert('description', 'Description is required').notEmpty();
//     req.assert('price', 'Price is required').notEmpty();
    
//     let errors = req.validationErrors();

//     if (!errors) {
//         let bookDetails = new book ({
//             name: req.body.name,
//             author: req.body.author,
//             published: req.body.published,
//             description: req.body.description,
//             price: req.body.price,
//         });

//         bookDetails .save((err, doc) => {
//             if (!err)
//                 req.flash('success', 'Book successfully added!');
//                 req.redirect('/');
//             else {
//                 console.log(err);
//             }
//         });
//     } 
// else {
//     var errorInfo = "";
//     errors.forEach(function(error) {
//         errorInfo += error.msg + '<br>';
//     });

//     req.flash('error', errorInfo);

//     res.render('book', {
//         title:'Book List', 
//         bookList: bookList
//     });

// }

module.exports = router;
