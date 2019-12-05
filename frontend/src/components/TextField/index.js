import React from "react";
import TextField from "@material-ui/core/TextField";

const ZappTextField = props => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      autoFocus
      {...props}
    />
  );
};
export default ZappTextField;
