const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Add all routes here
router.post('/register', controller.insertNewDevice);
router.get('', controller.getAllDevices);
router.put('/:id', controller.updateADevice);
router.delete('/:id', controller.deleteADevice);

module.exports = router;