const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Add all routes here
router.post('', controller.insertNewNote);
router.get('', controller.getAllNotes);
router.put('/:id', controller.updateANote);
router.delete('/:id', controller.deleteANote);

module.exports = router;