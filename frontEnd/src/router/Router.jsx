import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { SignIn } from "../container/container";
import App from "../App";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="user" element={<p>user</p>} />
      </Route>
      <Route path="signin" element={<SignIn />} />
    </>
  )
);
export default Router;
