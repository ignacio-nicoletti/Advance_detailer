import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import authSlice from "../slices/authSlice";
import productSlice from "../slices/productSlice";
import profileSlice from "../slices/profileSlice";
import jobSlice from "../slices/jobSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    Auth: authSlice,
    product: productSlice,
    profile: profileSlice,
    jobs: jobSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
