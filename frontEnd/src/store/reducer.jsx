import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Admin/userSlice";
import usersSlice from "./Admin/usersSlice";
import token from "./Admin/token";
import productsSlice from "./Admin/productsSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    users: usersSlice,
    token: token,
    products: productsSlice,
  },
});
