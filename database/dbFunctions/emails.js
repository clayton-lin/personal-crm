const mysql = require('../index.js');

const addEmail = (user, contact, callback) => {
  const { userId } = user;
  const { contactId } = contact;

  const queryString = `
    
  `;

  mysql.connection.query(queryString, (err, results) => {
    if (err) {
      console.log(`error: `);
      console.log(err);
      callback(err, null);
    } else {
      console.log(``);
      callback(null, results);
    }
  });
}

const updateEmail = (user, contact, callback) => {
  const { userId } = user;
  const { contactId } = contact;

  const queryString = `
    
  `;

  mysql.connection.query(queryString, (err, results) => {
    if (err) {
      console.log(`error: `);
      console.log(err);
      callback(err, null);
    } else {
      console.log(``);
      callback(null, results);
    }
  });
}

const deleteEmail = (user, contact, callback) => {
  const { userId } = user;
  const { contactId } = contact;

  const queryString = `
    
  `;

  mysql.connection.query(queryString, (err, results) => {
    if (err) {
      console.log(`error: `);
      console.log(err);
      callback(err, null);
    } else {
      console.log(``);
      callback(null, results);
    }
  });
}

module.exports = {
  addEmail,
  updateEmail,
  deleteEmail
};