import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiscoverState as IFollowingsState } from 'state/types';

const initialState: IFollowingsState = {
    loading: false
    , error: null,
    people: []
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
