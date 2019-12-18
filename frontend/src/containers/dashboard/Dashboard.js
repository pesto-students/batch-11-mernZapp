import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ZappTabs from './Tabs';
import CreateZapp from './CreateZapp';
import './zapp.css';


const Dashboard = ({ auth: { user } }) => {
  if (user === null) {
    return <Redirect to="/login" />;
  }
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
  // eslint-disable-next-line react/forbid-prop-types
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
)(Dashboard);
