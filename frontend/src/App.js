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

import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

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
