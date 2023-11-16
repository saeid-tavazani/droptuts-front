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

export const { usersInfo } = usersSlice.actions;
export default usersSlice.reducer;
