import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiscoverState } from 'state/types';

const initialState: IDiscoverState = {
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

const discoverSlice = createSlice({
    name: 'discover',
    initialState,
    reducers: {
        loadingDiscoverStart: (state) => {
            state.loading = true
            state.error = null
        },
        loadingDiscoverSuccess: (state, action: PayloadAction<IDiscoverState['people']>) => {
            state.loading = false
            state.error = null
            state.people = [...action.payload]
        },
        loadDiscoverFailure: (state) => {
            state.loading = false
            state.error = 'Could not load information'
            state.people = []
        },
    },
});

export const { loadDiscoverFailure,loadingDiscoverStart,loadingDiscoverSuccess } = discoverSlice.actions;
export default discoverSlice.reducer;
