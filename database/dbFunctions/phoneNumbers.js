const mysql = require('../index.js');


const retrievePhoneNumbers = (user) => {
  return new Promise((resolve, reject) => {

    const { userId } = user;
  
    const queryString = `
      
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err)
      }
      resolve(rows);
    });
    
  });
}


const verifyPhoneNumberExists = (user, contact, callback) => {
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
  verifyPhoneNumberExists,
  addPhoneNumber,
  updatePhoneNumber,
  deletePhoneNumber
};