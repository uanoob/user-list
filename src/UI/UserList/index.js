import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../../store/actions';
import UserListItem from './userList_item';

class UserList extends Component {
  componentWillMount() {
    this.props.dispatch(getUsers());
  }

  showNewUser = newuser => <UserListItem {...newuser} key={newuser.id} />;

  renderItems = users =>
    (users.list ? users.list.map(item => <UserListItem {...item} key={item.id} />) : null);

  render() {
    return (
      <div className="my-4">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Phone</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>{this.renderItems(this.props.users)}</tbody>
          <tbody>
            {this.props.users.newuser ? this.showNewUser(this.props.users.newuser) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserList);
