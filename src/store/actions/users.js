import uuidv1 from 'uuid/v1';
import { getLocalStorage, saveToLocalStorage, sortDataFromStorage } from '../utils';

import { GET_USERS, SORT_USERS, ADD_USER, DELETE_USER, CLEAR_USER } from './types';

export function getUsers() {
  const request = getLocalStorage('users');
  return {
    type: GET_USERS,
    payload: request,
  };
}

export function sortUsers(field, order) {
  const sorted = sortDataFromStorage('users', field, order);

  return {
    type: SORT_USERS,
    payload: sorted,
  };
}

export function addUser(user) {
  const data = {
    ...user,
    id: uuidv1(),
  };
  const list = saveToLocalStorage('users', data);
  return {
    type: ADD_USER,
    payload: list,
  };
}

export const deleteUser = (id) => {
  let request;
  if (localStorage.getItem('users') === null) {
    request = [];
  } else {
    request = JSON.parse(localStorage.getItem('users'));
  }
  request.forEach((user, index) => {
    if (user.id === id) {
      request.splice(index, 1);
    }
  });
  localStorage.setItem('users', JSON.stringify(request));
  return {
    type: DELETE_USER,
    payload: request,
  };
};

export const clearUser = () => ({
  type: CLEAR_USER,
  payload: {
    user: null,
  },
});
