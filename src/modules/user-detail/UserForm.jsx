import React, { useState } from 'react';

function UserDetail() {
  const [user, setUser] = useState({ firstName: '', lastName: '', isFamily: false });

  const handleInput = e => {
    const { name, value, checked, type } = e.target;
    setUser(state => ({ ...state, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="firstName">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            type="text"
            value={user.firstName}
            onChange={handleInput}
          />
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

export default UserDetail;
