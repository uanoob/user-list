import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsers, sortUsers, deleteUser } from '../../store/actions';
import UserListItem from './userList_item';

class UserList extends Component {
  componentWillMount() {
    this.props.dispatch(getUsers());
  }

  handleInput = (event, field, order) => {
    this.props.dispatch(sortUsers(field, order));
  };

  handleDeleteUser = (event, id) => {
    event.preventDefault();
    this.props.dispatch(deleteUser(id));
  };

  renderItems = users =>
    (users.list
      ? users.list.map(item => (
        <UserListItem {...item} key={item.id} handleDeleteUser={this.handleDeleteUser} />
      ))
      : null);

  render() {
    return (
      <div className="my-4">
        <table className="table table-bordered table-striped">
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
                    onClick={event => this.handleInput(event, 'firstname', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onClick={event => this.handleInput(event, 'firstname', 'down')}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="d-flex justify-content-around">
                  <i
                    className="fa fa-long-arrow-up"
                    role="button"
                    tabIndex="0"
                    onClick={event => this.handleInput(event, 'lastname', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onClick={event => this.handleInput(event, 'lastname', 'down')}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="d-flex justify-content-around">
                  <i
                    className="fa fa-long-arrow-up"
                    role="button"
                    tabIndex="0"
                    onClick={event => this.handleInput(event, 'phone', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onClick={event => this.handleInput(event, 'phone', 'down')}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="d-flex justify-content-around">
                  <i
                    className="fa fa-long-arrow-up"
                    role="button"
                    tabIndex="0"
                    onClick={event => this.handleInput(event, 'gender', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onClick={event => this.handleInput(event, 'gender', 'down')}
                  />
                </div>
              </th>
              <th scope="col">
                <div className="d-flex justify-content-around">
                  <i
                    className="fa fa-long-arrow-up"
                    role="button"
                    tabIndex="0"
                    onClick={event => this.handleInput(event, 'age', 'up')}
                  />
                  <i
                    className="fa fa-long-arrow-down"
                    role="button"
                    tabIndex="0"
                    onClick={event => this.handleInput(event, 'age', 'down')}
                  />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>{this.renderItems(this.props.users)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserList);
