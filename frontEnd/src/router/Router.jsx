import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";

import { Login, Register } from "../container/Container";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="panel" element={<Panel />}>
        <Route path="products" element={<PanelProducts />} />
      </Route> */}
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </>
  )
);
export default Router;
