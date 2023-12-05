import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AsidePanel from "../components/Panel/AsidePanel";
import HederPanel from "../components/Panel/HederPanel";
import { useSelector } from "react-redux";

export default function Panel() {
  const [open, setOpen] = useState(false);
  const main = useRef();
  useEffect(() => {
    main.current.offsetWidth > 1024 ? setOpen(true) : "";
  }, []);
  const user = useSelector((state) => state.user.value);

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
