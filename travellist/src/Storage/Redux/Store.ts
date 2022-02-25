import {configureStore} from '@reduxjs/toolkit';
import {ApiReducer, FilterReducer} from './Reducers';

const reducer = {
  ApiSlice: ApiReducer,
  FilterSlice: FilterReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
