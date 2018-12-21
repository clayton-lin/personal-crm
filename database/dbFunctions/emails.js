const mysql = require('../index.js');

const verifyEmailExists = (contactId) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      
    `;
  
    mysql.connection.query(queryString, (err, rows, field) => {
      if (err) {
        return reject(err);
      }
      const result = {
        contactId,
        email,
        rows
      };
      resolve(result);
    });
  });
};

const addEmail = (contactId, email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      const results = {
        contactId,
        email,
        rows
      };
      resolve(results);
    });
  });
};

const updateEmail = (contactId, email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
    
    `;

    mysql.connection(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      const results = {
        contactId,
        email,
        rows
      };
      resolve(results);
    });
  });
};




const deleteEmail = 





module.exports = {
  verifyEmailExists,
  addEmail,
  updateEmail,
  deleteEmail
};