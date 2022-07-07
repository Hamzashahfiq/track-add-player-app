import React, { Component } from 'react'
import InputField from '../../components/inputField/InputField'
import './AddTrack.css'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TButton from '../../components/tButton/TButton';
import { Alert } from '@mui/material';
import { AddTracksData } from '../../store/AddTrackSlice';
import { connect } from 'react-redux';


class AddTrack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tCategory: "",
      tName: "",
      releaseBy: "",
      trackUrl: "",
      imageUrl: ""

    }
  }
  setStates(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler() {
    if (!this.state.tCategory || !this.state.tName || !this.state.releaseBy || !this.state.trackUrl || !this.state.imageUrl) {
      alert("Input all data properly.")
      return;
    }
    let trackData = {
      tCategory: this.state.tCategory,
      trackDetail: {
        tName: this.state.tName,
        releaseBy: this.state.releaseBy,
        trackUrl: this.state.trackUrl,
        imageUrl: this.state.imageUrl
      }

    }
    const afterSubmit = () => {
      this.setState({
        tCategory: "",
        tName: "",
        releaseBy: "",
        trackUrl: "",
        imageUrl: ""
      })
      alert("a click")
    }
    this.props.addTrack({ trackData, afterSubmit })

  }

  render() {
    return (
      <div className='mainDiv'>
        <div className='formMainDiv' >
          <div>
            <Typography className='FDText' variant="h4" gutterBottom component="div">
              Add Track Detail
            </Typography>
          </div>
          <Grid container spacing={2} sx={{ textAlign: 'center', p: 3 }}>
            <Grid item xs={12} sm={6}>
              <InputField type='Text' name="tCategory" value={this.state.tCategory} onChange={(e) => this.setStates(e)} labal="Category" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField type='Text' name="tName" value={this.state.tName} onChange={(e) => this.setStates(e)} labal="Track Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField type='Text' name="releaseBy" value={this.state.releaseBy} onChange={(e) => this.setStates(e)} labal="Released By" />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <InputField type='Text' labal="Released By" /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className='TrackText'>Choose Track File </p>
              <input type='file' name="trackUrl" value={this.state.trackUrl} onChange={(e) => this.setStates(e)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className='ImageText'>Choose Track Image </p>
              <input type='file' name="imageUrl" value={this.state.imageUrl} onChange={(e) => this.setStates(e)} />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TButton text='Submit' onClick={() => this.submitHandler()} />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTrack: ({ trackData, afterSubmit }) => dispatch(AddTracksData({ trackData, afterSubmit })),
})
export default connect(null, mapDispatchToProps)(AddTrack)
