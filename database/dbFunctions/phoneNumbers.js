const mysql = require('../index.js');


const retrievePhoneNumbers = (contactId) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM phone_numbers WHERE contact_id = ${contactId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err)
      }
      const results = {
        contactId,
        rows
      }
      resolve(results);
    });
    
  });
};

const verifyPhoneNumberExists = (contactId, phoneNumber) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM phone_numbers WHERE 
        contactId = ${contactId} AND digits = '${phoneNumber}'
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      const results = {
        contactId,
        phoneNumber,
        rows
      }
      resolve(results);
    });
  });
};

const addPhoneNumber = (contactId, phoneNumber) => {
  return new Promise((resolve, reject) => {
    // phone number is already formatted to XXX-XXX-XXXX
    const queryString = `
      INSERT INTO phone_numbers (contacts_id, digits) VALUES
        (contactId, phoneNumber)
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      const results = {
        contactId,
        phoneNumber,
        rows
      }
      resolve(results);
    });
  });
};

const updatePhoneNumber = (contactId, phoneNumber) => {
  return new Promise((resolve, reject) => {
  
    const queryString = `
      
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      const results = {
        contactId,
        phoneNumber,
        rows
      }
      resolve(results);
    });
  });
};

const deletePhoneNumber = (contactId, phoneNumber) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      const results = {
        contactId,
        phoneNumber,
        rows
      }
      resolve(results);
    });
  });
};

module.exports = {
  retrievePhoneNumbers,
  verifyPhoneNumberExists,
  addPhoneNumber,
  updatePhoneNumber,
  deletePhoneNumber
};