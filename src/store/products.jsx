import { createSlice } from "@reduxjs/toolkit";

export const products = createSlice({
  name: "products",
  initialState: {
    value: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProducts } = products.actions;
export default products.reducer;
