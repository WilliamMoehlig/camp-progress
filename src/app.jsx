import React, { useState, useMemo } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './modules/home/home';
import Login from './modules/login/Login';
import NotFound from './modules/pages/notFound';
import UserDetail from './modules/user-detail/components/UserForm';
import Navbar from './components/Navbar';
import IdentityContext from './contexts/IdentityContext';

export function AppWithoutRouter() {
  const [identity, setIdentity] = useState({});

  const identityContextValue = useMemo(
    () => ({
      name: identity,
      setIdentity,
    }),
    [identity]
  );

  return (
    <>
      <IdentityContext.Provider value={identityContextValue}>
        <Navbar />
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={UserDetail} path="/users/new" />
          <Route component={Home} path="/" />
          <Route component={NotFound} path="*" />
        </Switch>
      </IdentityContext.Provider>
    </>
  );
}

export function App() {
  return (
    <Router>
      <AppWithoutRouter />
    </Router>
  );
}

export default hot(App);
