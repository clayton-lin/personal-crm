const mysql = require('../index.js');

// returns all phone numbers for given contactId
const retrieveEmails = (contactId) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM emails WHERE contacts_id = ${contactId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, contactId });
    });
    
  });
};


// verifies whether email already exists as an entry for given contactId
const verifyEmailExists = (contactId, Email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM emails WHERE 
        contactId = ${contactId} AND digits = '${Email}';
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, contactId, Email });
    });
  });
};


// creates new email entry in database for given contactId
const addEmail = (contactId, Email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO emails (contacts_id, digits) VALUES
        (${contactId}, '${Email}');
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, contactId, Email });
    });
  });
};


// updates email entry with id of emailId
const updateEmail = (emailId, email) => {
  return new Promise((resolve, reject) => {
    // phone number is already formatted to XXX-XXX-XXXX
    const queryString = `
      UPDATE emails
        SET digits = '${email}'
        WHERE id = ${emailId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, emailId, email });
    });
  });
};


// deletes email entry with id of EmailId
const deleteEmail = (emailId) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      DELETE FROM emails WHERE id = ${emailId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve({ rows, emailId });
    });
  });
};


module.exports = {
  retrieveEmails,
  verifyEmailExists,
  addEmail,
  updateEmail,
  deleteEmail
};