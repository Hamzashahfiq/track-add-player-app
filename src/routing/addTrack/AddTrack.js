import React from 'react'
import InputField from '../../components/inputField/InputField'
import './AddTrack.css'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function AddTracks() {
  return (
    <div className='mainDiv'>
      <div className='formMainDiv' >
        <div>
          <Typography className='FDText' variant="h4" gutterBottom component="div">
            Add Track Detail
          </Typography>
        </div>
        <Grid container spacing={2} sx={{textAlign:'center',p:3}}>
          <Grid item xs={12} sm={6}>
            <InputField labal="Category" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField labal="Track Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField labal="Released By" />
          </Grid>

        </Grid>


      </div>
    </div>
  )
}
