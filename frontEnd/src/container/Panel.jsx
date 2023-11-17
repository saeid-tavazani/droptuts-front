import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "../store/userSlice";
import { setToken } from "../store/token";
import { useEffect } from "react";
import Aside from "../components/panel/Aside";
import Header from "../components/panel/Header";
import Cookies from "js-cookie";
import axios from "../assets/axios/Axios";
import jsonData from "../assets/jsonData.json";
import LodingPage from "../components/UI/LodingPage";

export default function Panel() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    }
  }, []);

  return user ? (
    <>
      <Aside user={user} />
      <section className="lg:w-[calc(100%-235px)] flex flex-col w-full ">
        <Header siteName={jsonData.webSiteName} user={user} />
        <article className="w-full h-full overflow-y-auto overflow-x-hidden p-4 sm:p-6">
          <Outlet />
        </article>
      </section>
    </>
  ) : (
    <LodingPage />
  );
}