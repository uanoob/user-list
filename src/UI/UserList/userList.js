import React, { Component } from 'react';
import { connect } from 'react-redux';

import './userList.css';

import { getUsers, sortUsers, deleteUser } from '../../store/actions';
import UserListItem from './userList_item';

class UserList extends Component {
  componentWillMount() {
    this.props.dispatch(getUsers());
  }

  handleSortUsers = (field, order) => {
    this.props.dispatch(sortUsers(field, order));
  };

  handleDeleteUser = (event, id) => {
    event.preventDefault();
    this.props.dispatch(deleteUser(id));
  };

  renderUserListItems = users =>
    (users.list
      ? users.list.map(item => (
        <UserListItem {...item} key={item.id} handleDeleteUser={this.handleDeleteUser} />
      ))
      : null);

  render() {
    return (
      <div className="my-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Phone</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
            </tr>

            <tr>
              <th scope="col">
                <div className="d-flex justify-content-around">
                  <i
                    className="fa fa-long-arrow-up"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('firstname', 'up')}
                    onClick={() => this.handleSortUsers('firstname', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('firstname', 'down')}
                    onClick={() => this.handleSortUsers('firstname', 'down')}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="d-flex justify-content-around">
                  <i
                    className="fa fa-long-arrow-up"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('lastname', 'up')}
                    onClick={() => this.handleSortUsers('lastname', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('lastname', 'down')}
                    onClick={() => this.handleSortUsers('lastname', 'down')}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="d-flex justify-content-around">
                  <i
                    className="fa fa-long-arrow-up"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('phone', 'up')}
                    onClick={() => this.handleSortUsers('phone', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('phone', 'down')}
                    onClick={() => this.handleSortUsers('phone', 'down')}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="d-flex justify-content-around">
                  <i
                    className="fa fa-long-arrow-up"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('gender', 'up')}
                    onClick={() => this.handleSortUsers('gender', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('gender', 'down')}
                    onClick={() => this.handleSortUsers('gender', 'down')}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="d-flex justify-content-around">
                  <i
                    className="fa fa-long-arrow-up"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('age', 'up')}
                    onClick={() => this.handleSortUsers('age', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onKeyPress={() => this.handleSortUsers('age', 'down')}
                    onClick={() => this.handleSortUsers('age', 'down')}
                  />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>{this.renderUserListItems(this.props.users)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserList);
