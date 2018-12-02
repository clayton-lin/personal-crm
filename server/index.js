require('dotenv').config({path: '../.env'});
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

connection.query('SELECT * FROM cities', (err, rows, fields) => {
  if (err) throw err;
  console.log(rows[0]);
})

connection.end();


const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`Listening on port ${port}`));