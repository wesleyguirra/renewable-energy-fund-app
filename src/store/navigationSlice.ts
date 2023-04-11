import {createSlice} from '@reduxjs/toolkit'
import { CommonActions } from '@react-navigation/native'

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentRoute: null,
  },
  reducers: {
    navigate: (state, action) => {
      state.currentRoute = action.payload
    },
    goBack: (state) => {
      state.currentRoute = null
    }
  }
})

export const {navigate, goBack} = navigationSlice.actions
export default navigationSlice.reducer
