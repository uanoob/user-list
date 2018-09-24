import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import './App.css';
import UserForm from './UI/UserForm/userForm';
import UserList from './UI/UserList/userList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <UserForm />
          <UserList />
        </div>
      </Provider>
    );
  }
}

export default App;
