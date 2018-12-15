const contacts = require('../database/dbFunctions/contacts');

const user = {
  userId: 0
}

const contact = {
  givenName: 'Clayton',
  preferredName: 'Clayton',
  middleName: 'YT',
  familyName: 'Lin', 
  maidenName: null,
  gender: 'male',
  photo: null,
  birthYear: 1989,
  birthMonth: 11,
  birthDay: 10,
}

// promise chain
// check if contact exists in database
// if yes,
  // return message that says contact already in db
// if no
  // add contact and return sucess message and contact id
  // add phone number to db
  // add email to db





contacts.addContact(user, contact, (err, results) => {
  console.log('COMPLETE');
  console.log(results);
})