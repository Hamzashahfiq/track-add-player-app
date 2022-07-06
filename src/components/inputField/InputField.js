import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputField({type, labal, id, variant}) {
  return (
      <TextField type ={type} fullWidth id={id || "outlined-basic"} label={labal} sx={{color:'white'}} variant={variant || "outlined"}/>
  );
}
