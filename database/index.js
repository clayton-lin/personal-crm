const contacts = require('./dbFunctions.contacts.js');


const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect();

// check if db successfully connected
connection.query('SELECT * FROM crm_cities', (err, rows) => {
  if (err) throw err;
  console.log(rows[0]);
});

module.exports = {
  contacts
}