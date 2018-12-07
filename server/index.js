// require('dotenv').config({path: '../.env'});
require('dotenv').config();
const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect();
connection.query('SELECT * FROM crm_cities', (err, rows, fields) => {
  if (err) throw err;
  console.log(rows[0]);
});

const app = express();
app.use(bodyParser.json());
const port = 8000;

app.use(express.static(path.join(__dirname, '../dist')));

// app.get('*', (req, res) => {
//   res.redirect('/');
// });

// app.get('/', (req, res) => res.send('../src/index.html'));

app.listen(port, () => console.log(`Listening on port ${port}`));

// connection.end();