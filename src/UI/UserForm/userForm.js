import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUser } from '../../store/actions';

class UserForm extends Component {
  state = {
    formdata: {
      firstname: '',
      lastname: '',
      phone: '',
      gender: '',
      age: '',
    },
  };

  handleInput = (e, name) => {
    if (e.target.checkValidity()) {
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
    } else {
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
    }
    const newFormData = { ...this.state.formdata };
    newFormData[name] = e.target.value;
    this.setState({
      formdata: newFormData,
    });
  };

  handleClearForm = (e) => {
    this.setState({
      formdata: {
        firstname: '',
        lastname: '',
        phone: '',
        gender: '',
        age: '',
      },
    });
    e.target.querySelectorAll('.form-control').forEach((node) => {
      node.classList.remove('is-valid');
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(addUser({
      ...this.state.formdata,
    }));
    this.handleClearForm(e);
  };

  render() {
    return (
      <div className="mx-2">
        <h4 className="text-center my-3">Registration form:</h4>
        <form className="needs-validation" onSubmit={this.submitForm}>
          <div className="form-group row">
            <label htmlFor="form-firstname" className="col-sm-3 col-form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control col-sm-9"
              id="form-firstname"
              placeholder="First Name"
              value={this.state.formdata.firstname}
              onChange={event => this.handleInput(event, 'firstname')}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="form-lastname" className="col-sm-3 col-form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control col-sm-9"
              id="form-lastname"
              placeholder="Last Name"
              value={this.state.formdata.lastname}
              onChange={event => this.handleInput(event, 'lastname')}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="form-phone" className="col-sm-3 col-form-label">
              Phone number
            </label>
            <input
              type="number"
              className="form-control col-sm-9"
              id="form-phone"
              placeholder="Phone number"
              value={this.state.formdata.phone}
              onChange={event => this.handleInput(event, 'phone')}
              required
            />
          </div>
          <div className="form-group row">
            <label htmlFor="form-gender" className="col-sm-3 col-form-label">
              Your gender
            </label>
            <select
              id="form-gender"
              className="form-control col-sm-9 custom-select"
              value={this.state.formdata.gender}
              onChange={event => this.handleInput(event, 'gender')}
              required
            >
              <option value="">Choose...</option>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
          </div>
          <div className="form-group row">
            <label htmlFor="form-age" className="col-sm-3 col-form-label">
              Your age
            </label>
            <input
              type="number"
              className="form-control col-sm-9"
              id="form-age"
              placeholder="Your age"
              value={this.state.formdata.age}
              onChange={event => this.handleInput(event, 'age')}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserForm);
