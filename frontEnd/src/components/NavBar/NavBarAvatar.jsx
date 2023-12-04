import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import axios from "../../assets/axios/";
import jsonData from "../../assets/jsonData.json";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { userInfo } from "../../store/userSlice";
import { setToken } from "../../store/token";

export default function NavBarAvatar({ classNames }) {
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
              console.log(response.data);
              dispatch(userInfo(response.data.data));
              dispatch(setToken(cookie));
            } else {
              alert(5555);
              Cookies.remove(jsonData.cookieTokenName);
            }
          })
          .catch((error) => {
            alert(444);
            console.log(error);
            Cookies.remove(jsonData.cookieTokenName);
          });
      }
    }
  }, [user]);

  return (
    <div className="h-fit">
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="relative flex rounded-full bg-blue-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
            <img
              className="h-8 w-8 rounded-full"
              src="https://droptuts.com/wp-content/themes/massive-dynamic/assets/img/logo-dark.png"
              alt="user profile"
            />
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
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Your Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Sign out
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
