const { connection } = require('../index.js');

const retrieveAllContacts = (user) => {
  return new Promise((resolve, reject) => {

    const { userId } = user;
  
    const queryString = `
      SELECT * FROM contacts WHERE user_id = ${userId};
    `;
  
    connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err)
      }
      resolve(rows);
    });
    
  });
}



const verifyContactExists = (user, contact) => {
  return new Promise((resolve, reject) => {
    const { userId } = user;
  
    const {
      givenName,
      preferredName,
      middleName,
      familyName, 
      maidenName,
      gender
    } = contact;
  
    const queryString = `
      SELECT * FROM contacts WHERE user_id = '${userId}' AND preferred_name = '${preferredName}' AND family_name = '${familyName}'
    `;
  
    connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve(rows);
    });
  })
}



const addContact = (user, contact) => {
  return new Promise((resolve, reject) => {
    const { userId } = user;

    const {
      givenName,
      preferredName,
      middleName,
      familyName, 
      maidenName,
      gender,
      photo,
      birthYear,
      birthMonth,
      birthDay,
    } = contact;

    const queryString = `
      INSERT INTO contacts
        (user_id, given_name, preferred_name, middle_name, 
        family_name, maiden_name, gender, birth_year, birth_month, birth_day) VALUES 
        (${userId}, '${givenName}', '${preferredName}', '${middleName}', '${familyName}', 
        '${maidenName}', '${gender}', ${birthYear}, ${birthMonth}, ${birthDay})
    `;

    connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve(rows);
    });
  });
}


const updateContact = (contactId, contact) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      UPDATE contacts SET
        user_id = ${userId}, 
        given_name = '${givenName}', 
        preferred_name = '${preferredName}', 
        middle_name = '${middleName}', 
        family_name = '${familyName}', 
        maiden_name = '${maidenName}', 
        gender = '${gender}', 
        birth_year = ${birthYear}, 
        birth_month = ${birthMonth}, 
        birth_day = ${birthDay},
        WHERE id = ${contactId};
    `;
  
    connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve(rows);
    });
  });
};



const deleteContact = (contactId) => {
  return new Promise((resolve, reject) => {
    const queryString = `
      DELETE FROM contacts WHERE id = ${contactId};
    `;
  
    connection.query(queryString, (err, rows, fields) => {
      if (err) { return reject(err); }
      resolve(rows);
    });
  });
};



module.exports = {
  retrieveAllContacts,
  verifyContactExists,
  addContact,
  updateContact,
  deleteContact
}