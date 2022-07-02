import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFeedsState } from 'state/types';

const initialState: IFeedsState = {
    loading: false
    , error: null,
    feeds: [{
        author: '',
        body: '', tags: '',
        views: 4, media: null
    }]
};

const feedsSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {
        loadingFeedsStart: (state) => {
            state.loading = true
            state.error = null
        },
        loadingFeedsSuccess: (state, action: PayloadAction<IFeedsState['feeds']>) => {
            state.loading = false
            state.error = null
            state.feeds = [...action.payload]
        },
        loadFeedsFailure: (state) => {
            state.loading = false
            state.error = 'Could not load information'
            state.feeds = []
        },
    },
});

export const { loadFeedsFailure, loadingFeedsStart, loadingFeedsSuccess } = feedsSlice.actions;
export default feedsSlice.reducer;
