import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import usersSlice from "./usersSlice";
import token from "./token";
import productsSlice from "./productsSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    adminUsers: usersSlice,
    token: token,
    products: productsSlice,
  },
});
