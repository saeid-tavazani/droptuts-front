import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";

import {
  Login,
  Register,
  Panel,
  LogOut,
  ProductsPanel,
  AddProduct,
} from "../container/Container";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="panel" element={<Panel />}>
        <Route path="products" element={<ProductsPanel />} />
        <Route path="addproduct" element={<AddProduct />} />
      </Route>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="logout" element={<LogOut />} />
    </>
  )
);
export default Router;
