import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred!important;
`;


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

const Alert = ({ alerts }) => alerts !== null
  && alerts.length > 0
  && alerts.map((alert) => (
    <Wrapper key={alert.id}>
      <Title>
        {alert.msg}
      </Title>
    </Wrapper>
  ));

Alert.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
