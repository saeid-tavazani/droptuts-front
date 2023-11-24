import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="panel" element={<Panel />}>
        <Route path="products" element={<PanelProducts />} />
      </Route> */}
      <Route path="/" element={<App />} />
    </>
  )
);
export default Router;
