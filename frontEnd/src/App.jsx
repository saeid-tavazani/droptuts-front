import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "./store/userSlice";
import { useEffect, useRef } from "react";
import Aside from "./components/App/Aside";
import Header from "./components/App/Header";
import { Editor } from "@tinymce/tinymce-react";
import Cookies from "js-cookie";
import axios from "./assets/axios/Axios";
import Navigations from "./components/App/Navigations";
import jsonData from "./assets/jsonData.json";

export default function App() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const cookie = Cookies.get(jsonData.cookieTokenName);
    if (cookie) {
      axios
        .get("/session/verify", { headers: { authorization: cookie } })
        .then((response) => {
          console.log("====================================");
          console.log(response.data);
          console.log("====================================");
          if (response.data.success) {
            dispatch(userInfo(response.data.data));
          } else {
            navigate("/signin");
          }
        })
        .catch((error) => {
          navigate("/signin");
          Cookies.remove(jsonData.cookieTokenName);
        });
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    user && (
      <>
        <Aside />
        <section className="lg:w-[calc(100%-256px)] flex flex-col w-full ">
          <Header />
          <Navigations />
          <Outlet />
        </section>
      </>
    )
  );
}
