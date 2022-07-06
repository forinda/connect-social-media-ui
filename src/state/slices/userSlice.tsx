import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from 'state/types';

const initialState: IUserState = {
	email: '',
	username: '',
	avatar: '',
	followings: 0,
	followers: 0,
	firstName:'',
	lastName: '',
	dob: '',
	gender: '',
	city: '',
	zip: '',
	country: '',
	_id:''
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUserState>) => {
			state.avatar = action.payload.avatar;
			state.email = action.payload.email;
			state.username = action.payload.username;
		},
		unsetUser: (state) => {
			state.avatar = '';
			state.email = '';
			state.username = '';
		},
	},
});

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;
