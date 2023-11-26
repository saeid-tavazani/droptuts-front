import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";
import NavBarAvatar from "./NavBarAvatar";
import NavBarMobile from "./NavBarMobile";
import NavBarMobileButton from "./NavBarMobileButton";
import style from "../../assets/styles/style";

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
    <Disclosure as="nav" className="bg-white border-b  h-16">
      {({ open }) => (
        <>
          <div className={`flex justify-between ${style.container}`}>
            <div className="flex w-full h-16 items-center justify-between">
              <div className="flex h-full items-center gap-4">
                <div className="flex  gap-4 justify-center  items-center">
                  <Logo className="h-11 w-auto" />
                  <div className="gap-4 hidden sm:flex items-center ">
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

                <NavBarMobileButton open={open} />
              </div>

              <NavBarAvatar classNames={classNames} />
            </div>
          </div>

          <NavBarMobile navigation={navigation} classNames={classNames} />
        </>
      )}
    </Disclosure>
  );
}
