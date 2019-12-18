import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './form.css';

const StyledButton = () => {
  return (
    <Button className="styledButton" variant="contained" color="primary">Sign In</Button>
  );
};

const GridSpaced = () => {
  return (
    <Grid className="GridSpaced" />
  );
};


export {
  StyledButton, GridSpaced,
};
