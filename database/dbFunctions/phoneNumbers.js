const mysql = require('../index.js');

const addPhoneNumber = (user, contact, callback) => {
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

const updatePhoneNumber = (user, contact, callback) => {
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

const deletePhoneNumber = (user, contact, callback) => {
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
  addPhoneNumber,
  updatePhoneNumber,
  deletePhoneNumber
};