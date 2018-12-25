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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handdleChange(e) {
    this.setState({
      
    });

  }

  handleSubmit(e) {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <h1>AddContactForm</h1>
        <form onSubmit={this.handleSubmit} >

        </form>
      </div>
    );
  }
}

export default AddContactForm;