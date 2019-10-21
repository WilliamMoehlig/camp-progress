import React from 'react';

const IdentityContext = React.createContext({ name: undefined, setIdentity: () => {} });

export default IdentityContext;
