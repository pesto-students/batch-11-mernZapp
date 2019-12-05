import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Wrapper, Form, StyledButton, GridSpaced } from '../../components/FormCss';


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
const TextFieldEmail = () => {
  return <TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  id="email"
  label="Email"
  name="email"
  autoComplete="email"
  autoFocus
/>
}
const TextFieldConfirmPassword = () => {
  return <TextField
  variant="outlined"
  margin="normal"
  required
  fullWidth
  name="confirm-password"
  label="Confirm password"
  type="password"
  id="confirm-password"
  autoComplete="current-password"
/>
}

export default function SignUp() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Wrapper>
        <Typography component="h1" variant="h5"> Sign up </Typography>
        <Form noValidate>
          <TextFieldUsername />
          <TextFieldEmail />
          <TextFieldPassword />
          <TextFieldConfirmPassword />
          <StyledButton type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </StyledButton>        
            <GridSpaced>
              <Link to="#"> {'Already have an account? Sign In'}</Link>
            </GridSpaced>         
        </Form>
      </Wrapper>
    </Container>
  );
}
