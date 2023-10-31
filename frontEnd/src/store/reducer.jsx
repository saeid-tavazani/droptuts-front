import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import usersSlice from "./usersSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    users: usersSlice,
  },
});
