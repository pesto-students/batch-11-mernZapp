import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { register } from '../../actions/auth';
import ZappTextField from '../../components/TextField';

// eslint-disable-next-line no-shadow
const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  // eslint-disable-next-line object-curly-newline
  const { username, email, password, password2 } = formData;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      // setAlert('Passwords do not match', 'danger');
    } else {
      // console.log(formData);
      register({ username, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="wrapper">
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate className="form">
          <ZappTextField
            id="username"
            label="Username"
            name="username"
            type="text"
            autoComplete="username"
            handleChange={handleChange}
          />
          <ZappTextField
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            handleChange={handleChange}
          />
          <ZappTextField
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            handleChange={handleChange}
          />
          <ZappTextField
            id="confirm-password"
            label="Confirm Password"
            name="password2"
            type="password"
            autoComplete="current-password"
            handleChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Sign Up
          </Button>
          <Grid className="gridspaced">
            <Link to="/signin">
              Already have an account? Sign In
            </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
Register.defaultProps = {
  isAuthenticated: null,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { register },
)(Register);
