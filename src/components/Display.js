import React, { Component } from 'react';
import AddContactForm from './AddContactForm';


class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div>
        <h1>Display</h1>
        <AddContactForm />
      </div>
    );
  }
}

export default Display;