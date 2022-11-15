let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to Book Model
let book = require('../models/books');
let databaseController = require('../controllers/book');

// Read Operation
// Get route for the book list page - READ Operation

// router.get("/book/create", book_)

// READ OPERATION
router.get('/', databaseController.displayDatabase);

// ADD OPERATION
// get route for displaying the Add-Page Content

router.get('/add', databaseController.displayAddPage);

// post route for processing the Add-Page Content
router.post('/add', databaseController.processAddPage);

// EDIT OPERATION
// get route for processing the Edit-Page Content
router.get('/edit/:id', databaseController.displayEditPage);

// post route for processing the Edit-Page Content
router.post('/edit/:id', databaseController.processEditPage);

// DELETE OPERATION
// get route deleting content
router.get('/delete/:id', databaseController.performDelete);

module.exports = router;
