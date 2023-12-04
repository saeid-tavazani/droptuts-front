import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import token from "./token";
export default configureStore({
  reducer: {
    user: userSlice,
    token: token,
  },
});
