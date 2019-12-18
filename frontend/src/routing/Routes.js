import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../containers/signUp/SignUp';
import Login from '../containers/signIn/SignIn';
import Dashboard from '../containers/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
    </Switch>
  </>
);

export default Routes;
