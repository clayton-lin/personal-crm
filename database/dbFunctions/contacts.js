const mysql = require('../index.js');

const retrieveAllContacts = (user) => {
  return new Promise((resolve, reject) => {

    const { userId } = user;
  
    const queryString = `
      SELECT * FROM contacts WHERE user_id = ${userId};
    `;
  
    mysql.connection.query(queryString, (err, rows, fields) => {
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
  
    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      const results = {
        user,
        contact,
        rows
      }
      resolve(results);
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
        ('${userId}', '${givenName}', '${preferredName}', '${middleName}', '${familyName}', 
        '${maidenName}', '${gender}', ${birthYear}, ${birthMonth}, ${birthDay})
    `;

    mysql.connection.query(queryString, (err, rows, fields) => {
      if (err) {
        return reject(err);
      }
      const results = {
        user,
        contact,
        rows
      }
      resolve(results);
    });
  });
}

module.exports = {
  retrieveAllContacts,
  verifyContactExists,
  addContact
}