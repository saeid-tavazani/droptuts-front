import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  SignIn,
  LogOut,
  Users,
  EditProfile,
  Products,
  Index,
} from "../container/Admin/container";
import App from "../App";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="admin/panel" element={<Index />}>
        <Route path="users" element={<Users />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="admin/panel/signin" element={<SignIn />} />
      <Route path="admin/panel/logout" element={<LogOut />} />
      <Route path="/" element={<App />} />
    </>
  )
);
export default Router;
