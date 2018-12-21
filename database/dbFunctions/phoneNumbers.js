const mysql = require('../index.js');


const retrievePhoneNumbers = (contactId) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM phone_numbers WHERE contacts_id = ${contactId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
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
        contactId = ${contactId} AND digits = '${phoneNumber}';
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
        (${contactId}, '${phoneNumber}');
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
    // phone number is already formatted to XXX-XXX-XXXX
    const queryString = `
      UPDATE phone_numbers
        SET digits = '${phoneNumber}'
        WHERE id = ${contactId};
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

const deletePhoneNumber = (phoneNumberId) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      DELETE FROM phone_numbers WHERE id = ${phoneNumberId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      const results = {
        phoneNumberId,
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