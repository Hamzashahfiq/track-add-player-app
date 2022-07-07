import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class TButton extends Component {
  render() {
     const {text, onClick}    = this.props
    return (
        <Button variant="contained" onClick={() => onClick()}>{text || 'BText'}</Button>
    )
  }
}
