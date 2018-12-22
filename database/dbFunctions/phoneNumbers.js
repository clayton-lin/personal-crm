const mysql = require('../index.js');


// returns all phone numbers for given contactId
const retrievePhoneNumbers = (contactId) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM phone_numbers WHERE contacts_id = ${contactId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, contactId });
    });
    
  });
};


// verifies whether phoneNumber already exists as an entry for given contactId
// phoneNumber should already formatted to 'XXX-XXX-XXXX' format
const verifyPhoneNumberExists = (contactId, phoneNumber) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM phone_numbers WHERE 
        contactId = ${contactId} AND digits = '${phoneNumber}';
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, contactId, phoneNumber });
    });
  });
};


// creates new phone number entry in database for given contactId
// phoneNumber should already formatted to 'XXX-XXX-XXXX' format
const addPhoneNumber = (contactId, phoneNumber) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO phone_numbers (contacts_id, digits) VALUES
        (${contactId}, '${phoneNumber}');
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, contactId, phoneNumber });
    });
  });
};


// updates phone number entry with id of phoneNumberId
// phoneNumber should already formatted to 'XXX-XXX-XXXX' format
const updatePhoneNumber = (phoneNumberId, phoneNumber) => {
  return new Promise((resolve, reject) => {
    // phone number is already formatted to XXX-XXX-XXXX
    const queryString = `
      UPDATE phone_numbers
        SET digits = '${phoneNumber}'
        WHERE id = ${phoneNumberId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, phoneNumberId, phoneNumber });
    });
  });
};


// deletes phone number entry with id of phoneNumberId
const deletePhoneNumber = (phoneNumberId) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      DELETE FROM phone_numbers WHERE id = ${phoneNumberId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, phoneNumberId });
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