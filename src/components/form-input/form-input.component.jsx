import React from 'react';
import TextField from '@material-ui/core/TextField';


const FormInput = ({ handleChange, label, ...props }) => (
 
    <TextField onChange={handleChange} {...props}  variant="outlined"
    margin="normal" label={label} fullWidth/>
  
);

export default FormInput;
