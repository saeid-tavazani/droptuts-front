import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: null,
  },
  reducers: {
    products: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { products } = productsSlice.actions;
export default productsSlice.reducer;
