import {combineReducers} from '@reduxjs/toolkit'
import navigationSlice from "./navigationSlice";

const rootReducer = combineReducers({
  navigation: navigationSlice
})

export default rootReducer
