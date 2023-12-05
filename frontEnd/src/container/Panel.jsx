import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AsidePanel from "../components/Panel/AsidePanel";
import HederPanel from "../components/Panel/HederPanel";

export default function Panel() {
  const [open, setOpen] = useState(false);
  const main = useRef();
  useEffect(() => {
    main.current.offsetWidth > 1024 ? setOpen(true) : "";
  }, []);

  return (
    <main ref={main} className="w-full h-screen flex ">
      <AsidePanel status={open} />
      <article className="w-full h-full ">
        <HederPanel open={open} setOpen={setOpen} />
        <div className="overflow-y-auto w-full h-[calc(100%-4rem)]">
          <Outlet />
        </div>
      </article>
    </main>
  );
}
