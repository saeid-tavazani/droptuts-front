import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { SignIn, LogOut, Users, EditProfile } from "../container/container";
import App from "../App";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="users" element={<Users />} />
        <Route path="editprofile" element={<EditProfile />} />
      </Route>
      <Route path="signin" element={<SignIn />} />
      <Route path="logout" element={<LogOut />} />
    </>
  )
);
export default Router;
