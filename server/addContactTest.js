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

contacts.addContact(user, contact, (err, results) => {
  console.log('COMPLETE');
  console.log(results);
})