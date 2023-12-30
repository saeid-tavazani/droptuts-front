import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import token from "./token";
import products from "./products";
export default configureStore({
  reducer: {
    user: userSlice,
    token: token,
    products: products,
  },
});
