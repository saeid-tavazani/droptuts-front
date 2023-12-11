import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import axios from "../../assets/axios/";
import jsonData from "../../assets/jsonData.json";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { userInfo } from "../../store/userSlice";
import { setToken } from "../../store/token";
import { LiaUserEditSolid, LiaCashRegisterSolid } from "react-icons/lia";
import { BiLogOut, BiUserCircle, BiLogIn } from "react-icons/bi";
import { MdOutlineManageAccounts } from "react-icons/md";
export default function NavBarAvatar({ classNames }) {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const dataLogin = [
    {
      text: "ورود",
      href: "/login",
      icon: <BiLogIn size={20} />,
    },
    {
      text: "ثبت نام",
      href: "/register",
      icon: <LiaCashRegisterSolid size={20} />,
    },
  ];
  const dataUser = [
    {
      text: "خروج",
      href: "/logout",
      icon: <BiLogOut size={20} />,
    },
    {
      text: "ویرایش حساب کاربری",
      href: "/panel/Profile",
      icon: <LiaUserEditSolid size={20} />,
    },
    {
      text: "حساب کاربری",
      href: "/panel",
      icon: <MdOutlineManageAccounts size={20} />,
    },
  ];
  const list = user ? dataUser : dataLogin;
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
              Cookies.remove(jsonData.cookieTokenName);
            }
          })
          .catch((error) => {
            Cookies.remove(jsonData.cookieTokenName);
          });
      }
    }
  }, [user]);

  return (
    <div className="h-fit">
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="relative flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
            {user ? (
              <img
                className="h-8 w-8 rounded-full"
                src={user.picture}
                alt={user.name}
              />
            ) : (
              <BiUserCircle className="text-gray-600" size={35} />
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-225"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-left transition-all rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {list.map((item, index) => (
              <Menu.Item key={index}>
                <Link
                  to={item.href}
                  className={
                    " px-4 py-2 text-sm text-gray-700 flex w-full items-center gap-2"
                  }
                >
                  {item.icon}
                  {item.text}
                </Link>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
