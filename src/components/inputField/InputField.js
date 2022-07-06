import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputField({labal}) {
  return (
      <TextField  fullWidth id="outlined-basic" label={labal} sx={{color:'white'}} variant="outlined"/>
  );
}
