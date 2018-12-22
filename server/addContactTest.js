const contacts = require('../database/dbFunctions/contacts');
const phoneNumbers = require('../database/dbFunctions/phoneNumbers');
const emails = require('../database/dbFunctions/emails');


const user = {
  userId: 0,
  preferredName: 'Stan',
  familyName: 'Lee'
};

const contact1 = {
  givenName: 'Philip',
  preferredName: 'Phil',
  middleName: 'J.',
  familyName: 'Coulson', 
  maidenName: '',
  gender: 'male',
  photo: null,
  birthYear: 1970,
  birthMonth: 12,
  birthDay: 25,
  phoneNumber: '123-456-7890',
  email: 'philip.j.coulson@shield.com'
};


const addNewContact = (user, newContact) => {
  const { userId } = user;
  const { preferredName, familyName, phoneNumber, email } = newContact;
  let contactId;
  let phoneNumberId;
  let emailId;

  return contacts.verifyContactExists(user, newContact)
    .then((data) => {
      if (data[0]) {
        const { preferred_name, family_name} = data[0];
        throw `Contact '${preferred_name} ${family_name}' already exists for user ${user.userId}`;
      }

      return contacts.addContact(user, newContact);
    })
    .then((data) => {
      contactId = data.insertId;
      console.log(`Contact '${preferredName} ${familyName}' added for userId = ${userId}, contactId = ${contactId}`);

      return phoneNumbers.addPhoneNumber(contactId, phoneNumber);
    })
    .then((data) => {
      phoneNumberId = data.insertId;
      console.log(`Phone number '${phoneNumber}' added for contactId = ${contactId}, phoneNumberId = ${phoneNumberId}`);

      return emails.addEmail(contactId, email);
    })
    .then((data) => {
      emailId = data.insertId;
      console.log(`Email '${email}' added for contactId = ${contactId}, emailId = ${emailId}`);
      
      console.log(`Add new contact ${contactId} completed`);
    })
    .then(() => {
      contacts.deleteContact(contactId);
    })
    .catch((err) => {
      console.log(err);
    });

};

addNewContact(user, contact1);