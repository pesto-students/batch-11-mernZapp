/* eslint-disable no-unused-vars */
import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ZappTabs from './Tabs';
import CreateZapp from './CreateZapp';
import './zapp.css';


const Dashboard = ({ auth: { user } }) => {
  if (user === null) {
    return <Redirect to="/login" />;
  }
  console.log(user);
  return (
    <div className="zappContainer">
      <CreateZapp />
      <div className="dashboardwrapper">
        <ZappTabs />
      </div>
    </div>
  );
};


Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
)(Dashboard);
