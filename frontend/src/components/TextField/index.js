import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


const ZappTextField = (props) => {
  const {
    id, label, name, autoComplete, type, handleChange
  } = props;
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      autoFocus
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      type={type}
      onChange={handleChange}
    />
  );
};
ZappTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ZappTextField;
