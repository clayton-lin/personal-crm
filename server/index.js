// require('dotenv').config({path: '../.env'});
require('dotenv').config();
const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');
const database = require('../database/index.js');



const app = express();
app.use(bodyParser.json());
const port = 8000;

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => console.log(`Listening on port ${port}`));

// connection.end();