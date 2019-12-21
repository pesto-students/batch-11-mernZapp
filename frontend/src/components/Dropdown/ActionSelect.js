import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { zappAction } from '../../actions/createzapp';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ActionSelect = (props) => {
  const classes = useStyles();
  const [activity, setValue] = React.useState('');
  const { type, values } = props;
  const optionsValues = values;
  console.log(props);
  const handleChange = async (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    // zappAction(event.target.value);
    // onchange(event.target.value);
  };
  console.log(optionsValues);

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
          { optionsValues.map((option) => (
            <MenuItem
              value={option}
              // eslint-disable-next-line react/no-array-index-key
              key={option}
              name={option}
            >
              {option}

            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

ActionSelect.propTypes = {
  values: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
// export default connect({
//   zappAction,
// })(SimpleSelect);

const mapStateToProps = (state) => ({
  action: state.creatzapp,
});


export default connect(
  mapStateToProps,
  { zappAction },
)(ActionSelect);
