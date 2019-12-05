import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Wrapper, Form, StyledButton,GridSpaced } from '../../components/FormCss';

const TextFieldUsername = () => {
  return <TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  id="username"
  label="Username"
  name="username"
  autoComplete="username"
  autoFocus
/>
}
const TextFieldPassword = () => {
  return <TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  name="password"
  label="Password"
  type="password"
  id="password"
  autoComplete="current-password"
/>
}
export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Wrapper>
        <Typography component="h1" variant="h5"> Sign in
        </Typography>
        <Form noValidate>
          <TextFieldUsername />
          <TextFieldPassword />
          <StyledButton type="submit" fullWidth variant="contained" color="primary">Sign In 
          </StyledButton>
          <GridSpaced container>
            <Grid item xs>
              <Link href="#"> Forgot password? </Link>
            </Grid>
            <Grid item>
              <Link to="#"> {"Don't have an account? Sign Up"} </Link>
            </Grid>
          </GridSpaced>
        </Form>
      </Wrapper>
    </Container>
  );
}
