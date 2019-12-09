import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ZappStyledButton = styled(Button)`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  @media (max-width: 768px) {
    padding: 6px 10px 3px;
    font-size: 0.8rem;
    line-height: 1;
    height: max-content;
    margin-left: 0.6rem;
  }
`;

const ZappButton = (props) => {
  const { margin, color, text } = props;

  return (
    <ZappStyledButton color={color} variant="contained" margin={margin}>{text}</ZappStyledButton>
  );
};
ZappButton.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};
ZappButton.defaultProps = {
  margin: '',
  color: 'primary',
};

export { ZappButton };
