import React, { useState, useEffect} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios";
import {
  Wrapper,
  Form,
  StyledButton,
  GridSpaced,
} from '../../components/FormCss';
import ZappTextField from '../../components/TextField';

export default function SignIn() {
  const [hasError, setErrors] = useState(false);
  const [formValue, setFormvalue] = useState({});


const handleChange = (e) => {
  // console.log(e.target.value)
  const { name } = e.target.name;
  setFormvalue({ ...formValue, [name]: e.target.value });
  };

const login = async (e)  => {
  
  try {
    const response = await axios.post('http://localhost:5000/users/login', formValue);
    console.log('👉 Returned data:', response);
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
}
 
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
            onClick={login}
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
