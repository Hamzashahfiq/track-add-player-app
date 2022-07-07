import React, { Component } from 'react'
import TextField from '@mui/material/TextField';


export default class InputField extends Component {
  render() {
      const {type, labal, id, variant,value,onChange,name} =  this.props
    return (
      <TextField type ={type} name = {name}  value = {value} onChange = {(e)=> onChange(e)} size="small" fullWidth id={id || "outlined-basic"} label={labal} sx={{color:'white'}} variant={variant || "outlined"}/>
    )
  }
}

