import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";
import NavBarAvatar from "./NavBarAvatar";
import NavBarMobile from "./NavBarMobile";
import NavBarMobileButton from "./NavBarMobileButton";

const navigation = [
  { name: "خانه", href: "/", current: true },
  { name: "دوره های آموزشی", href: "cours", current: false },
  { name: "محصولات", href: "products", current: false },
  { name: "مقاله ها", href: "article", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white border-b">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 flex justify-between lg:px-8">
            <div className=" flex h-16 items-center sm:justify-between">
              <div className="flex  gap-4 justify-center  items-center">
                <div className="flex  items-center">
                  <Logo className="h-11 w-auto" />
                </div>
                <div className="hidden sm:ml-6 sm:flex items-center ">
                  <div className="flex gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "border-b-blue-600 text-blue-600"
                            : "text-gray-600 hover:border-b-blue-600 hover:text-blue-600",
                          "transition-all duration-300 font-bold border-b border-b-transparent"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" inset-y-0 right-0 flex items-center sm:hidden">
                <NavBarMobileButton open={open} />
              </div>

              <div className="  flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                {/* Profile dropdown */}
                <NavBarAvatar classNames={classNames} />
              </div>
            </div>
          </div>

          <NavBarMobile navigation={navigation} classNames={classNames} />
        </>
      )}
    </Disclosure>
  );
}
