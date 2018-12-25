import React, { Component } from 'react';

class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContactInfo: {
          // userId: null,
          // contactId: null,
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

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <h1>AddContactForm</h1>
        <form onSubmit={this.handleSubmit} >
          <label>
            First Name: 
            <input 
              name="givenName"
              type="text" 
              value={this.state.givenName}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddContactForm;