const mysql = require('../index.js');

const retrieveAllContacts = (user, callback) => {
  const { userId } = user;
  const queryString = `
    SELECT * FROM contacts WHERE user_id = ${userId};
  `;
  mysql.connection.query(queryString, (err, results) => {
    if (err) {
      console.log(`error: contact retrieval for user ${userID} failed`);
      console.log(err);
      callback(err, null);
    } else {
      console.log(`contacts for user ${userId} sucessfully retrieved`);
      callback(null, results);
    }
  });
}

const verifyContactExists = (user, contact, callback) => {
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
    SELECT * FROM crm_contacts WHERE user = ${userId} AND preferred_name = '${preferredName}' AND family_name = ${familyName}
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

const addContact = (user, contact, callback) => {
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
    INSERT INTO crm_contacts
      (user, given_name, preferred_name, middle_name, 
      family_name, maiden_name, gender, birth_year, birth_month, birth_day) VALUES 
      ('${userId}', '${givenName}', '${preferredName}', '${middleName}', '${familyName}', 
      '${maidenName}', '${gender}', ${birthYear}, ${birthMonth}, ${birthDay})
  `;

  mysql.connection.query(queryString, (err, results) => {
    if (err) {
      console.log(`error: add contact for user ${userId} failed`);
      console.log(err);
      callback(err, null);
    } else {
      console.log(`contact ${givenName} ${familyName} successfully added for user ${userId}`);
      callback(null, results);
    }
  });
}

module.exports = {
  retrieveAllContacts,
  verifyContactExists,
  addContact
}