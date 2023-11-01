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

// Action creators are generated for each case reducer function
export const { setToken } = token.actions;
export default token.reducer;
