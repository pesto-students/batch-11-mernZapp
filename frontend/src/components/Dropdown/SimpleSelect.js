import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [activity, setValue] = React.useState('');


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const { type, values } = props;
  const optionsValues = JSON.parse(values);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activity}
          onChange={handleChange}
        >
          { optionsValues.options.map((option) => (
            <MenuItem
              value={option.name}
              // eslint-disable-next-line react/no-array-index-key
              key={option.id}
              name={option.name}
            >
              {option.name}

            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

SimpleSelect.propTypes = {
  values: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
