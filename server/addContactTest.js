const contacts = require('../database/dbFunctions/contacts');

const user = {
  userId: 0,
  preferredName: 'Clayton',
  familyName: 'Lin'
}

const contact = {
  givenName: 'Clayton',
  preferredName: 'Claytone',
  middleName: 'YT',
  familyName: 'Lin', 
  maidenName: '',
  gender: 'male',
  photo: null,
  birthYear: 1989,
  birthMonth: 11,
  birthDay: 10,
}

// verify whether contact exists in database for user
// searches using preferred_name and family_name
contacts.verifyContactExists(user, contact)
// if contact exists, throw error
// else add contact
.then((data) => {
  const { user, contact, rows } = data;

  if (rows[0]) {
    const found = rows[0];
    throw `contact '${found.preferred_name}' '${found.family_name}' already exists for user ${user.userId}`;
  }

  return contacts.addContact(user, contact);
})
// then add phone number to table referencing contact's id
.then((data) => {
  const { user, contact, rows } = data;
  const contactId = rows.insertId;

})
// then add email to table referencing contact's id
.then((data) => {

})
.catch((err) => {
  console.log(err);
});

