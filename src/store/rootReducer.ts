import {combineReducers} from '@reduxjs/toolkit';
import navigationSlice from './navigationSlice';
import authenticationSlice from './authenticationSlice';

const rootReducer = combineReducers({
  navigation: navigationSlice,
  authentication: authenticationSlice,
});

export default rootReducer;
