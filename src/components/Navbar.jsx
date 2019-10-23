import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import identityContext from '../contexts/IdentityContext';
import Button from './Button';
import image from '../public/images/js-logo.png';

function Navbar() {
  const identity = useContext(identityContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <img src={image} width="30" height="30" className="d-inline-block align-top" alt="Bootcamp Logo" />
        Bootcamp
      </NavLink>
      {identity.name ? (
        <>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/todo">Todos</NavLink>
            </li>
          </ul>

          <NavLink to="/logout">Log Out</NavLink>
        </>
      ) : (
        <NavLink to="/login">Log In</NavLink>
      )}
      <Button
        className="authenticateButton"
        event={() => {
          if (identity.name !== undefined && identity.name !== 'admin') {
            identity.setIdentity({ name: 'admin' });
          }
        }}
      >
        Authenticate
      </Button>
    </nav>
  );
}

export default Navbar;
