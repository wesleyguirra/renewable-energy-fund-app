import {createSlice} from '@reduxjs/toolkit';
import {navigationRef} from '../navigation';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentRoute: null,
  },
  reducers: {
    navigate: (state, action) => {
      console.log(action);
      if (navigationRef.isReady()) {
        // @ts-ignore
        navigationRef.navigate(action.payload.screen, action.payload.params);
      }
      state.currentRoute = action.payload;
    },
    goBack: state => {
      navigationRef.goBack();
      state.currentRoute = null;
    },
    replace: (state, action) => {
      console.log(navigationRef);
      if (navigationRef.isReady()) {
        // @ts-ignore
        navigationRef.navigate(action.payload.screen, action.payload.params);
      }
      state.currentRoute = action.payload;
    },
  },
});

export const {navigate, goBack} = navigationSlice.actions;
export default navigationSlice.reducer;
