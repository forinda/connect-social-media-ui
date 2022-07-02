import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from 'state/types';

let initialState: IAuthState;
initialState = {
	accessToken: '',
	isAuthenticated: false,
	error: '',
	loading: false,
	refreshToken: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginStart: (state) => {
			state.loading = true;
			return state;
		},
		loginSuccess: (state, action: PayloadAction<IAuthState>) => {
			state = { ...action.payload };
			return state;
		},
		loginFailure: (state, action: PayloadAction<IAuthState>) => {
			state.error = action.payload.error;
			state.loading = false;
			return state;
		},
		logout: (state) => {
			return initialState;
		},
	},
});

export const { loginFailure, loginStart, loginSuccess, logout } =
	authSlice.actions;
export default authSlice.reducer;
