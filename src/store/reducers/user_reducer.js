import { GET_USERS, SORT_USERS, ADD_USER, DELETE_USER } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, list: action.payload };
    case SORT_USERS:
      return { ...state, list: action.payload };
    case ADD_USER:
      return { ...state, list: action.payload };
    case DELETE_USER:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
