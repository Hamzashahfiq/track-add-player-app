import { configureStore } from '@reduxjs/toolkit'
import AddTrackSlice from '../store/AddTrackSlice'

export const Store = configureStore({
  reducer: {
    AddTrackSlice
  },
})