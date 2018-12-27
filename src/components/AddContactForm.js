import React, { Component } from 'react';

class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {
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
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    let newContact = Object.assign({}, this.state.newContact);
    newContact[name] = value;
    // let newContact = { ...this.state.newContact, [name]: value}; // why isn't this working

    this.setState({
      newContact
    });
  }

  handleSelect(e) {
    console.log(e);
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

          <div>
            <label>
              First Name: 
              <input
                name="givenName"
                type="text" 
                value={this.state.newContact.givenName}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Preferred Name: 
              <input
                name="preferredName"
                type="text" 
                value={this.state.newContact.preferredName}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Middle Name: 
              <input
                name="middleName"
                type="text" 
                value={this.state.newContact.middleName}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Last Name: 
              <input name="familyName"
                type="text" 
                value={this.state.newContact.lastName}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Maiden Name: 
              <input
                name="maidenName"
                type="text" 
                value={this.state.newContact.maidenName}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            Birthday:
            <label>
              <input
                name="birthMonth"
                type="number" 
                value={this.state.newContact.birthMonth}
                onChange={this.handleChange}
                placeholder="MM"
              />
            </label>
            <label>
              <input
                name="birthDay"
                type="number" 
                value={this.state.newContact.birthDay}
                onChange={this.handleChange}
                placeholder="DD"
              />
            </label>
            <label>
              <input
                name="birthYear"
                type="number" 
                value={this.state.newContact.birthYear}
                onChange={this.handleChange}
                placeholder="YYYY"
              />
            </label>
          </div>

          <div>
            <label>
              <input
                name="submit"
                type="submit" 
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContactForm;