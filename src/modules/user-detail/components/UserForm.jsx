import React, { useState } from 'react';
import { func } from 'prop-types';
import Alert from '../../alerts/Alert';

function UserDetail({ onSubmit }) {
  const errorMessages = [];
  const [user, setUser] = useState({ firstName: '', lastName: '', isFamily: false });

  const handleInput = e => {
    const { name, value, checked, type } = e.target;
    setUser(state => ({ ...state, [name]: type === 'checkbox' ? checked : value }));
  };

  const validateUser = () => {
    let isValid = true;
    if (user.firstName.length > 30) {
      isValid = false;
      errorMessages.push('Firstname should have a maximum length of 30 characters');
    }
    return {
      valid: isValid,
      errors: errorMessages,
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form noValidate onSubmit={e => (validateUser().valid ? handleSubmit(e) : null)}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="firstName">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="firstName"
            name="firstName"
            maxLength="30"
            placeholder="Enter First Name"
            type="text"
            required
            value={user.firstName}
            onChange={handleInput}
          />
          <div className="invalid-feedback" data-testid="validation-feedback-first-name">
            {errorMessages.map(e => (
              <Alert>{e}</Alert>
            ))}
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="lastName">
          Last Name
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            type="text"
            value={user.lastName}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 form-check-label" htmlFor="isFamily">
          Family
        </label>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              id="isFamily"
              type="checkbox"
              name="isFamily"
              checked={user.isFamily}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}

UserDetail.propTypes = {
  onSubmit: func.isRequired,
};

export default UserDetail;
