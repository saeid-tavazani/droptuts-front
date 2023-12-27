import NavBarAvatar from "../../components/NavBar/NavBarAvatar";
import NavBarMobileButton from "../../components/NavBar/NavBarMobileButton";
import { Disclosure } from "@headlessui/react";
import style from "../../assets/styles/style";

export default function HederPanel({ open, setOpen }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure
      as="nav"
      className="bg-box border-gray-400 border-b h-16 shadow-sm "
    >
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
  );
}
