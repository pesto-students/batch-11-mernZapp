/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PropTypes from 'prop-types';
import './zapp.css';


const CreateZapp = () => (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className="createZapp">
      <Typography component="h1" variant="h4">
          Create New Zapp
      </Typography>
      <AddCircleIcon />
    </div>
  </Container>
);

export default CreateZapp;
