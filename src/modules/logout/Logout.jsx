import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import IdentityContext from '../../contexts/IdentityContext';

function Logout() {
  const { setIdentity: setCurrentIdentity } = useContext(IdentityContext);

  setCurrentIdentity(false);

  return <Redirect to="/" />;
}

export default Logout;
