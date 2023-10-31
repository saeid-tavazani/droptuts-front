import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: null,
  },
  reducers: {
    usersInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { usersInfo } = usersSlice.actions;
export default usersSlice.reducer;
