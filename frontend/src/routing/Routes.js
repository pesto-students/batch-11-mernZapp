import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../containers/signUp/SignUp';
import Login from '../containers/signIn/SignIn';
import Dashboard from '../containers/dashboard/Dashboard';
import GithubOAuth from '../containers/githubOAuth';
import GithubOAuthPage from '../containers/githubOAuth/githubOauthPage';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/ghsignin" component={GithubOAuth} />
      <Route exact path="/ghtoken" component={GithubOAuthPage} />
    </Switch>
  </>
);

export default Routes;
