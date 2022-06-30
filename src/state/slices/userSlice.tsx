import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from 'state/types';

const initialState: IUserState = {
	email: 'janeDoe@gmail.com',
	username: 'janeDoe',
	avatar: null,
	followings: 4,
	followers: null,
	firstName: 'Jane',
	lastName: 'Doe',
	dob: '2022-10-10T12:23:43',
	gender: 'male',
	city: 'Nairobi',
	zip: 'NA',
	country: 'Kenya'
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
			state.avatar = null;
			state.email = '';
			state.username = '';
		},
	},
});

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;
