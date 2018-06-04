import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';
import reducers from './store/reducers';
import UserForm from './UI/UserForm/userForm';
import UserList from './UI/UserList/userList';

const middleware = applyMiddleware(promiseMiddleware);

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, composeWithDevTools(middleware))}>
        <div className="container">
          <UserForm />
          <UserList />
        </div>
      </Provider>
    );
  }
}

export default App;
