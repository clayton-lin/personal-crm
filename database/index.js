const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect();
connection.query('SELECT * FROM crm_cities', (err, rows) => {
  if (err) throw err;
  console.log(rows[0]);
});