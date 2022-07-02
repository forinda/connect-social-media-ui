import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiscoverState as IFollowingsState } from 'state/types';

const initialState: IFollowingsState = {
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

const followingsSlice = createSlice({
    name: 'followings',
    initialState,
    reducers: {
        loadingFollowingsStart: (state) => {
            state.loading = true
            state.error = null
        },
        loadingFollowingsSuccess: (state, action: PayloadAction<IFollowingsState['people']>) => {
            state.loading = false
            state.error = null
            state.people = [...action.payload]
        },
        loadFollowingsFailure: (state) => {
            state.loading = false
            state.error = 'Could not load information'
            state.people = []
        },
    },
});

export const { loadFollowingsFailure, loadingFollowingsStart, loadingFollowingsSuccess } = followingsSlice.actions;
export default followingsSlice.reducer;
