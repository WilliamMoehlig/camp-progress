import React from 'react';
import { hot } from 'react-hot-loader/root';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './modules/home/home';
import Login from './modules/login/login';
import NotFound from './modules/pages/notFound';

export function AppWithoutRouter() {
  return (
    <Switch>
      <Route component={Login} path="/login" />
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
