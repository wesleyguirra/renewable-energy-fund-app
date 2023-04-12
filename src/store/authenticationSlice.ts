import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  user: {
    name: string;
    email: string;
  } | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{name: string; email: string}>) => {
      console.log(action);
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: state => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;
