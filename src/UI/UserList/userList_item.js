import React from 'react';

const UserListItem = user => (
  <tr onClick={event => user.handleDeleteUser(event, user.id)}>
    <td>{user.firstname}</td>
    <td>{user.lastname}</td>
    <td>{user.phone}</td>
    <td>{user.gender}</td>
    <td>{user.age}</td>
  </tr>
);

export default UserListItem;
