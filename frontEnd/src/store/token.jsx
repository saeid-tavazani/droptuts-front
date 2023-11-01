import { createSlice } from "@reduxjs/toolkit";

export const token = createSlice({
  name: "token",
  initialState: {
    value: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setToken } = token.actions;
export default token.reducer;
