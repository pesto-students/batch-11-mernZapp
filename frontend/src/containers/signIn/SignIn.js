import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  Wrapper,
  Form,
  StyledButton,
  GridSpaced,
} from '../../components/FormCss';
import ZappTextField from '../../components/TextField';

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Wrapper>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form noValidate>
          <ZappTextField
            id="username"
            type="text"
            label="Username"
            name="username"
            autoComplete="username"
          />
          <ZappTextField
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="password"
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </StyledButton>
          <GridSpaced container>
            <Grid item xs>
              <Link to="/forgotpassword"> Forgot password? </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </GridSpaced>
        </Form>
      </Wrapper>
    </Container>
  );
}
