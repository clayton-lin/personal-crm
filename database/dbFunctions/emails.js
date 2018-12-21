const mysql = require('../index.js');

const queryDB = (queryString, contactId, email) => {
  mysql.connection.query(queryString, (err, rows, field) => {
    if (err) { return reject(err) }
    const results = {
      contactId,
      email,
      rows
    }
    resolve(results);
  });
};

const verifyEmailExists = (contactId, email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      
    `;

    return queryDB(queryString, contactId, email);
  });
};

const addEmail = (contactId, email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      
    `;
  
    return queryDB(queryString, contactId, email);
  });
};

const updateEmail = (contactId, email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
    
    `;

    return queryDB(queryString, contactId, email);
  });
};

const deleteEmail = (contactId, email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
    
    `;

    return queryDB(queryString, contactId, email);
  });
};

module.exports = {
  verifyEmailExists,
  addEmail,
  updateEmail,
  deleteEmail
};