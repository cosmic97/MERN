const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   GET all user contacts
// @access private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route  Post api/contacts
// @desc   Add new Contact
// @access private
router.post('/', (req, res) => {
  res.send('Add contacts');
});

// @route  Put api/contacts:id
// @desc   Update Contact
// @access private
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

// @route  Delete api/contacts:id
// @desc   Deletee Contact
// @access private
router.put('/:id', (req, res) => {
  res.send('Delete Contact');
});

module.exports = router;
