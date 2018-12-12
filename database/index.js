const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect();
connection.query('SELECT * FROM crm_cities', (err, rows) => {
  if (err) throw err;
  console.log(rows[0]);
});

const retrieveAllContacts = (user, callback) => {
  const { userId } = user;
  const queryString = `
    SELECT * FROM contacts WHERE user_id = ${userId};
  `;
  connection.query(queryString, (err, results) => {
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

const addNewContact = (contact, callback) => {
  
}

const updateName = (contact, callback) => {
  
}

const updateCity = (contact, callback) => {
  
}

const updateEmployer = (contact, callback) => {
  
}

const addEmail = (contact, callback) => {
  
}

const deleteEmail = (contact, callback) => {
  
}

const addPhoneNumber = (contact, callback) => {
  
}

const deletePhoneNumber = (contact, callback) => {
  
}

const updateGroup = (contact, callback) => {
  
}

const addInteraction = (contact, callback) => {
  
}

const updateInteraction = (contact, callback) => {
  
}

const deleteInteraction = (contact, callback) => {
  
}



module.export = {
  retrieveAllContacts,
  addNewContact,
  updateName,
  updateCity,
  updateEmployer,
  addEmail,
  deleteEmail,
  addPhoneNumber,
  deletePhoneNumber,
  updateGroup,
  addInteraction,
  updateInteraction,
  deleteInteraction,
}