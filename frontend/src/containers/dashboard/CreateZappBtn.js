import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { zappService } from '../../actions/createzapp';
import './zapp.css';


const CreateZapp = ({ services, zappService }) => {

  // const getService = () => zappService();
  const token = localStorage.token;
  console.log(token);
return (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className="createZapp">
      <Typography component="h1" variant="h4">
          Create New Zapp
      </Typography>
      <Link to="/createzapp">
        <AddCircleIcon />
      </Link>
    </div>
  </Container>
);
};

const mapStateToProps = (state) => ({
  services: state.services,
});

zappService.propTypes = {
  zappService: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { zappService },
)(CreateZapp);
