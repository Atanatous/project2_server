// routes/index.js

// MODULE IMPORT
const express                = require('express');
const router                 = express.Router();
const contact_controller     = require('./contact.controller');
const book_controller        = require('./book.controller');

// ROUTING CONTROL FOR CONTACT
router.get('/contacts', contact_controller.show);

router.get('/contacts/:contact_id', contact_controller.index);

router.get('/contacts/name/:name', contact_controller.find_by_name);

router.post('/contacts', contact_controller.create);

router.put('/contacts/:contact_id', contact_controller.update);

router.delete('/contacts/:contact_id', contact_controller.destroy);


// ROUTING CONTROL FOR BOOK
router.get('/books', book_controller.show);

router.get('/books/:book_id', book_controller.index);

router.get('/books/author/:author', book_controller.find_by_author);

router.post('/books', book_controller.create);

router.put('/books/:book_id', book_controller.update);

router.delete('/books/:book_id', book_controller.destroy);

// EXPORT AS MODULE
module.exports = router;
