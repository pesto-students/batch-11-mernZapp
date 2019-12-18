import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const SubheadingStyle = styled.h3`
  border-bottom: ${(props) => props.border || '1px solid #000'};
  line-height: 0.9em;
  width: fit-content;
`;

const Subheadings = (props) => {
  const { float, text, border } = props;

  return (
    <SubheadingStyle float={float} border={border}>{text}</SubheadingStyle>
  );
};

Subheadings.propTypes = {
  float: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  border: PropTypes.string,
};
Subheadings.defaultProps = {
  border: '1px solid #000',
};

export {
  Subheadings,
};
