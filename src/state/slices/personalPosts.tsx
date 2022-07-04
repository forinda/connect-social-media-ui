import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFeedsState } from 'state/types';

const initialState: IFeedsState = {
    loading: false
    , error: null,
    feeds: []
};

const personalPostsSlice = createSlice({
    name: 'userPosts',
    initialState,
    reducers: {
        loadPersonalPostsStart: (state) => {
            state.loading = true
            state.error = null
        },
        loadPersonalPostsSuccess: (state, action: PayloadAction<IFeedsState['feeds']>) => {
            state.loading = false
            state.error = null
            state.feeds = [...action.payload]
        },
        loadPeronalPostsFailure: (state) => {
            state.loading = false
            state.error = 'Could not load information'
            state.feeds = []
        },
    },
});

export const { loadPeronalPostsFailure, loadPersonalPostsStart, loadPersonalPostsSuccess } = personalPostsSlice.actions;
export default personalPostsSlice.reducer;
