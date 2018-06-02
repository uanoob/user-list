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

  handleInput = (event, name) => {
    const newFormData = { ...this.state.formdata };
    newFormData[name] = event.target.value;
    this.setState({
      formdata: newFormData,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    // console.log(this.state.formdata);
    this.props.dispatch(addUser({
      ...this.state.formdata,
    }));
  };

  render() {
    return (
      <div className="mx-2">
        <h4 className="text-center my-3">Registration form:</h4>
        <form className="needs-validation" noValidate onSubmit={this.submitForm}>
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please choose a first name.</div>
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please choose a last name.</div>
          </div>
          <div className="form-group row">
            <label htmlFor="form-phone" className="col-sm-3 col-form-label">
              Phone number
            </label>
            <input
              type="phone"
              className="form-control col-sm-9"
              id="form-phone"
              placeholder="Phone number"
              value={this.state.formdata.phone}
              onChange={event => this.handleInput(event, 'phone')}
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please choose a phone number.</div>
          </div>
          <div className="form-group row">
            <label htmlFor="form-gender" className="col-sm-3 col-form-label">
              Your gender
            </label>
            <select
              id="form-gender"
              className="form-control col-sm-9"
              value={this.state.formdata.gender}
              onChange={event => this.handleInput(event, 'gender')}
              required
            >
              <option>Choose...</option>
              <option>female</option>
              <option>male</option>
            </select>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please choose a gender.</div>
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
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please choose your age.</div>
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
  books: state.books,
});

export default connect(mapStateToProps)(UserForm);
