import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AsidePanel from "../components/Panel/AsidePanel";
import HederPanel from "../components/Panel/HederPanel";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import jsonData from "../assets/jsonData.json";

export default function Panel() {
  const [open, setOpen] = useState(false);
  const main = useRef();
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const cookie = Cookies.get(jsonData.cookieTokenName);
  useEffect(() => {
    main.current.offsetWidth > 1024 ? setOpen(true) : "";
  }, []);

  useEffect(() => {
    if (!(cookie || user)) {
      navigate("/login");
    }
  }, []);

  return (
    <main ref={main} className="w-full h-screen flex ">
      <AsidePanel status={open} user={user} />
      <article className="w-full h-full ">
        <HederPanel open={open} setOpen={setOpen} />
        <div className="overflow-y-auto w-full h-[calc(100%-4rem)]">
          <Outlet />
        </div>
      </article>
    </main>
  );
}
