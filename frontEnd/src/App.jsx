import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products";
import axios from "./assets/axios/Axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "./store/userSlice";
import Cookies from "js-cookie";
import jsonData from "./assets/jsonData.json";

export default function App() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const cookie = Cookies.get(jsonData.cookieTokenName);
    if (user == null) {
      if (cookie) {
        axios
          .get("/session/verify", { headers: { authorization: cookie } })
          .then((response) => {
            if (response.data.success) {
              dispatch(userInfo(response.data.data));
              dispatch(setToken(cookie));
            }
          })
          .catch((error) => {
            Cookies.remove(jsonData.cookieTokenName);
          });
      }
    }
  }, []);
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}
