import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SubheadingStyle = styled.h3`
  border-bottom: 1px solid #000;
  line-height: 0.9em;
  width: fit-content;
`;

const Subheadings = (props) => {
  const { float, text } = props;

  return (
    <SubheadingStyle float={float}>{text}</SubheadingStyle>
  );
};

Subheadings.propTypes = {
  float: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export {
  Subheadings,
};
