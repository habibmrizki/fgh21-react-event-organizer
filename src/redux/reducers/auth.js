import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    token: null,
  },
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.form.token = action.payload;
    },
    logout: (state, action) => {
      state.form.token = null;
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
