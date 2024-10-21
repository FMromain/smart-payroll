const express = require('express');
const { createClient } = require('../controllers/clientController');
const router = express.Router();

// POST route to create a new client
router.post('/clients', createClient);

module.exports = router;
