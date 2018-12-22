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
const verifyEmailExists = (contactId, email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      SELECT * FROM emails WHERE 
        contactId = ${contactId} AND digits = '${email}';
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve(rows);
    });
  });
};


// creates new email entry in database for given contactId
const addEmail = (contactId, email) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      INSERT INTO emails (contacts_id, digits) VALUES
        (${contactId}, '${email}');
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve(rows);
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
      resolve(rows);
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
      resolve(rows);
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