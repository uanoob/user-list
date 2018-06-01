import React, { Component } from 'react';

class UserForm extends Component {
  render() {
    return (
      <div className="mx-2">
        <h4 className="text-center my-3">Registration form:</h4>
        <form className="needs-validation" noValidate>
          <div className="form-group row">
            <label htmlFor="form-firstname" className="col-sm-3 col-form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control col-sm-9"
              id="form-firstname"
              placeholder="First Name"
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
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please choose a phone number.
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="form-gender" className="col-sm-3 col-form-label">
              Your gender
            </label>
            <select id="inputState" className="form-control col-sm-9" required>
              <option selected>Choose...</option>
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
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please choose your age.
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
