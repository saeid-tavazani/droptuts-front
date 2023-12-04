import { useState, useRef, useEffect } from "react";
import Logo from "../components/UI/Logo";
import NavBarAvatar from "../components/NavBar/NavBarAvatar";
import NavBarMobileButton from "../components/NavBar/NavBarMobileButton";
import { Disclosure } from "@headlessui/react";
import style from "../assets/styles/style";
import { motion } from "framer-motion";
export default function Panel() {
  const [open, setOpen] = useState(false);
  const main = useRef();
  useEffect(() => {
    main.current.offsetWidth > 1024 ? setOpen(true) : "";
    console.log(456);
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <main ref={main} className="w-full h-screen flex ">
      <motion.aside
        initial={open ? { width: "0px" } : { width: "20rem" }}
        animate={open ? { width: "20rem" } : { width: "0px" }}
        className="animate-sidebar-navigation overflow-hidden transition-width h-full bg-white shadow-sm border-l hidden lg:flex lg:relative"
      >
        <div className="py-8 px-8 w-full h-full flex flex-col">
          <Logo />
        </div>
      </motion.aside>
      <article className="w-full h-full ">
        <Disclosure as="nav" className="bg-white border-b h-16 shadow-sm ">
          <div
            className={`flex items-center h-full justify-between lg:justify-end  ${style.container}`}
          >
            <NavBarMobileButton
              className="lg:hidden"
              open={open}
              onClick={() => setOpen(!open)}
            />
            <NavBarAvatar classNames={classNames} />
          </div>
        </Disclosure>
        <div className="overflow-y-auto w-full h-[calc(100%-4rem)]"></div>
      </article>
    </main>
  );
}
