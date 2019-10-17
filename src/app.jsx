import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './modules/home/home';
import Login from './modules/login/Login';
import NotFound from './modules/pages/notFound';
import UserDetail from './modules/user-detail/UserForm';

export function AppWithoutRouter() {
  return (
    <Switch>
      <Route component={Login} path="/login" />
      <Route component={UserDetail} path="/users/new" />
      <Route component={Home} path="/" />
      <Route component={NotFound} path="*" />
    </Switch>
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
