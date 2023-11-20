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
  Panel,
  Register,
  PanelProducts,
} from "../container/container";
import App from "../App";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="panel" element={<Panel />}>
        <Route path="users" element={<Users />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="products" element={<PanelProducts />} />
      </Route>
      <Route path="signin" element={<SignIn />} />
      <Route path="logout" element={<LogOut />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<App />} />
    </>
  )
);
export default Router;
