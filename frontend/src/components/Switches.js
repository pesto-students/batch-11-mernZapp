import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div>
      <Switch
        checked={state.checked}
        onChange={handleChange('checked')}
        value="checkedNotification"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
