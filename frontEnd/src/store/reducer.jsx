import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import usersSlice from "./usersSlice";
import token from "./token";

export default configureStore({
  reducer: {
    user: userSlice,
    users: usersSlice,
    token: token,
  },
});
