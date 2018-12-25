import React, { Component } from 'react';

class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContactInfo: {
          userId: null,
          contactId: null,
          givenName: '',
          preferredName: '',
          middleName: '',
          familyName: '', 
          maidenName: '',
          gender: '',
          birthYear: null,
          birthMonth: null,
          birthDay: null,
          phoneNumber: '',
          email: ''
      }
    };






  }


  render() {
    return (
      <div>
        <h1>AddContactForm</h1>
      </div>
    );
  }
}

export default AddContactForm;