import React, { useContext } from 'react';
import identityContext from '../contexts/IdentityContext';
import Button from './Button';
import image from '../public/images/js-logo.png';

function Navbar() {
  const identity = useContext(identityContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={image} width="30" height="30" className="d-inline-block align-top" alt="Bootcamp Logo" />
        Bootcamp
      </a>
      {identity.name ? <a href="/logout">Log Out</a> : <a href="/login">Log In</a>}
      <Button
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
