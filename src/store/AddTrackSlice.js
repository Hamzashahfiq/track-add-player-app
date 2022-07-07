import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ref, set } from "firebase/database";
import { db } from '../config/Firebase';

export const AddTracksData = createAsyncThunk(
    'addTrack/AddTracksData',
    async ({trackData, afterSubmit }) => {
        try{
         const res =   await set(ref(db, 'tracks/'+ 123),trackData);
         console.log('res:',res )   
         afterSubmit()
        }
        catch(error){
          alert(error.message)
        } 
            
        
        
      

        return null
    }
  )





const initialState = {
  tracks:[]
}

export const AddTrackSlice = createSlice({
  name: 'addTrack',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(AddTracksData.fulfilled, (state, action) => {
    })
  },
})

// Action creators are generated for each case reducer function
export const {  } = AddTrackSlice.actions

export default AddTrackSlice.reducer