require('dotenv').config();
const express = require('express');
const path = require('path');
const database = require('../database/index.js');

const router = express.Router();

module.exports.router = router;