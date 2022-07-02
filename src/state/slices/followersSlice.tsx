import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiscoverState as IFollowersState } from 'state/types';

const initialState: IFollowersState = {
    loading: false
    , error: null,
    people: [{
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
    }]
};

const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        loadingFollowersStart: (state) => {
            state.loading = true
            state.error = null
        },
        loadingFollowersSuccess: (state, action: PayloadAction<IFollowersState['people']>) => {
            state.loading = false
            state.error = null
            state.people = [...action.payload]
        },
        loadFollowersFailure: (state) => {
            state.loading = false
            state.error = 'Could not load information'
            state.people = []
        },
    },
});

export const { loadFollowersFailure,loadingFollowersStart,loadingFollowersSuccess } = followersSlice.actions;
export default followersSlice.reducer;
