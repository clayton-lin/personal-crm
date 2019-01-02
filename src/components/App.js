import React, { Component } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Display from './Display';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Personal-CRM App</h1>
        <NavBar />
        <SideBar />
        <Display />
      </div>
    );
  }
}

export default App;