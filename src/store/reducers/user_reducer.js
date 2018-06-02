import { GET_USERS, ADD_USER, DELETE_USER, CLEAR_USER } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, list: action.payload };
    case ADD_USER:
      return {
        ...state,
        newuser: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        userdeleted: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: action.payload.user,
        userdeleted: action.payload.userdeleted,
      };
    default:
      return state;
  }
}
