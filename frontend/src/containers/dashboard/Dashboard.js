/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import ZappTabs from './Tabs';
import CreateZapp from './CreateZapp';
// import {
//   Wrapper,
// } from '../../components/FormCss';

const Wrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Dashboard = ({ isAuthenticated }) => (
  <Container component="main" maxWidth="xs">
    <CreateZapp />
    <Wrapper>
      <ZappTabs />
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
