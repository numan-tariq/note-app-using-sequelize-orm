const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Add all routes here
router.get('', controller.getAllEntity);
router.get('/search', controller.getEntityByTag);
router.get('/search', controller.getEntityByNoteAndTag);
router.post('', controller.insertNewNote);
router.get('/:id', controller.getEntityByID);
router.put('/:id', controller.updateANote);

module.exports = router;