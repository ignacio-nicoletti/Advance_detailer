import { ProfileProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  jobs: [],
};

export const profileSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    SetJobs: (state, action) => {
      state.jobs = action.payload.data;
    },
  
 
  },
});

// Action creators are generated for each case reducer function
export const { SetJobs} = profileSlice.actions;

export default profileSlice.reducer;
