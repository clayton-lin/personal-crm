require('dotenv').config();
const express = require('express');
const path = require('path');
const database = require('../database/index.js');

const router = express.Router();

router.get('/contacts/info', (req, res) => {
  
});

module.exports.router = router;