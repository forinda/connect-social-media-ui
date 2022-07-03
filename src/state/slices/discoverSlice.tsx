import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiscoverState } from 'state/types';

const initialState: IDiscoverState = {
    loading: false
    , error: null,
    people: []
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
