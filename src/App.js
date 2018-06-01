import React, { Component } from 'react';
import './App.css';
import UserForm from './UserForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <UserForm />
      </div>
    );
  }
}

export default App;
