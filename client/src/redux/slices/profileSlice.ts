import { ProfileProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";



const initialState: any = {
  user: {},
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    SetProfile: (state, action) => {
      state.user = action.payload.data.user;
    },
  setPayments:(state, action) => {
    state.user={...state.user,carrito:action.payload}
  }
 
  },
});

// Action creators are generated for each case reducer function
export const { SetProfile,setPayments} = profileSlice.actions;

export default profileSlice.reducer;
