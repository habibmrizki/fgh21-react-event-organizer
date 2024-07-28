import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.data = action.payload;
    },
    removeProfile: (state) => {
      state.data = null;
    },
  },
});

export const { addProfile, removeProfile } = profile.actions;
export default profile.reducer;
