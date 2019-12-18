/* eslint-disable no-undef */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './containers/signIn/SignIn';
import Routes from './routing/Routes';
import Alert from './components/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './containers/dashboard/Dashboard';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Alert />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route component={Routes} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
