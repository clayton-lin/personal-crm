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

const retrieveAllContacts = (user, callback) => {
  const { userId } = user;
  const queryString = `
    SELECT * FROM contacts WHERE user_id = ${userId}
  `;
  connection.query(queryString, (err, results) => {
    if (err) {
      console.log(`error: contact retrieval for user ${userID} failed`);
      console.log(err);
      callback(err, null);
    } else {
      console.log(`contacts for user ${userId} sucessfully retrieved`);
      callback(null, results);
    }
  });
}

module.export = {
  retrieveAllContacts
}