import React from 'react';

const UserListItem = user => (
  <tr
    className="user-list_item"
    role="button"
    tabIndex="0"
    onKeyPress={event => user.handleDeleteUser(event, user.id)}
    onClick={event => user.handleDeleteUser(event, user.id)}
  >
    <td>{user.firstname}</td>
    <td>{user.lastname}</td>
    <td>{user.phone}</td>
    <td>{user.gender}</td>
    <td>{user.age}</td>
  </tr>
);

export default UserListItem;
