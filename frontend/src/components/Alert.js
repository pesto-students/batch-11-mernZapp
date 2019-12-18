import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => alerts !== null
  && alerts.length > 0
  && alerts.map((alert) => (
    <div key={alert.id} className="alert">
      <h2 className="alert-msg">
        {alert.msg}
      </h2>
    </div>
  ));

Alert.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
