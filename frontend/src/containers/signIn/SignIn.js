import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { login } from '../../actions/auth';
import {
  Wrapper,
  Form,
  StyledButton,
  GridSpaced,
} from '../../components/FormCss';
import ZappTextField from '../../components/TextField';

// eslint-disable-next-line no-shadow
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Wrapper>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form>
          <ZappTextField
            id="email"
            type="text"
            label="Email"
            name="email"
            autoComplete="email"
            handleChange={handleChange}
          />
          <ZappTextField
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="password"
            handleChange={handleChange}
          />
          <StyledButton
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Sign In
          </StyledButton>
          <GridSpaced container>
            <Grid item xs>
              <Link to="/forgotpassword"> Forgot password? </Link>
            </Grid>
            <Grid item>
              <Link to="/register">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </GridSpaced>
        </Form>
      </Wrapper>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
Login.defaultProps = {
  isAuthenticated: null,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  { login },
)(Login);
