import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


const ZappButton = (props) => {
  const { margin, color, text } = props;

  return (
    <Button className="ZappButton" variant="contained" color={color} margin={margin}>{text}</Button>
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
