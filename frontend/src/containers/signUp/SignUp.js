import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  Wrapper,
  Form,
  StyledButton,
  GridSpaced,
} from '../../components/FormCss';
import ZappTextField from '../../components/TextField';

export default function SignUp() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Wrapper>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form noValidate>
          <ZappTextField
            id="username"
            label="Username"
            name="username"
            type="text"
            autoComplete="username"
          />
          <ZappTextField
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
          />
          <ZappTextField
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <ZappTextField
            id="confirm-password"
            label="Confirm Password"
            name="confirm-password"
            type="password"
            autoComplete="current-password"
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </StyledButton>
          <GridSpaced>
            <Link to="/signin">
              Already have an account? Sign In
            </Link>
          </GridSpaced>
        </Form>
      </Wrapper>
    </Container>
  );
}
