// require('dotenv').config({path: '../.env'});
require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const database = require('../database/index.js');
const routes = require('./routes.js');
const port = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', routes.router);

const addContactTest = require('./addContactTest.js');

app.listen(port, () => console.log(`Listening on port ${port}`));