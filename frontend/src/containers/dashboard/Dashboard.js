/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import {
  Wrapper,
} from '../../components/FormCss';

const Dashboard = ({ isAuthenticated }) => (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Wrapper>
      <Typography component="h1" variant="h5">
          MernZapp Dashboard
      </Typography>
    </Wrapper>
  </Container>
);

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool,
};
Dashboard.defaultProps = {
  isAuthenticated: null,
};
export default Dashboard;
