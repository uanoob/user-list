import uuidv1 from 'uuid/v1';
import {
  getFromLocalStorage,
  saveToLocalStorage,
  sortDataFromStorage,
  deleteFromLocalStorage,
} from '../utils';

import { GET_USERS, SORT_USERS, ADD_USER, DELETE_USER } from './types';

export function getUsers() {
  const request = getFromLocalStorage('users');
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
  const list = deleteFromLocalStorage('users', id);
  return {
    type: DELETE_USER,
    payload: list,
  };
};
