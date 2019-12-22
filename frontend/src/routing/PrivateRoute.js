import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={props => (!isAuthenticated && !loading ? (
      <Redirect to="/login" />
    ) : (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...props} />
    ))}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  auth: PropTypes.objectOf().isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
