import React, { Component } from 'react';
import NavBar from './NavBar';
import AddContactForm from './AddContactForm';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Personal-CRM App</h1>
        <NavBar />
        <AddContactForm/>
      </div>
    );
  }
}

export default App;