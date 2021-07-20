const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const userAccess = require('../../middleware/userAccess'); // Router-level middleware

router.get('/', mainController.index);
router.get('/admin', userAccess, mainController.userAccess);

module.exports = router;