import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'state/slices/userSlice';
import authReducer from 'state/slices/authSlice';
import discoverReducer from 'state/slices/discoverSlice';
import feedsReducer from 'state/slices/feedsSlice';
import personalPostsReducer from 'state/slices/personalPosts';
import followersReducer from 'state/slices/followersSlice';
import followingsReducer from 'state/slices/followingsSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'o-web-connect-state-2',
	version: 1,
	storage,
};

const rootReducer = persistReducer(
	persistConfig,
	combineReducers({ auth: authReducer, user: userReducer }),
);

const store = configureStore({
	reducer: {
		root: rootReducer,
		discover: discoverReducer,
		followers: followersReducer,
		followings: followingsReducer,
		feeds: feedsReducer,
		personalPosts: personalPostsReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
