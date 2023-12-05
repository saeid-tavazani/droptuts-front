import Logo from "../../components/UI/Logo";
import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsShop, BsGlobe2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const data = [
  {
    href: "/",
    Text: "سایت",
    icon: <BsGlobe2 size={20} />,
    access: ["admin", "user"],
  },
  {
    href: "/panel",
    Text: "داشبورد",
    icon: <AiOutlineHome size={20} />,
    access: ["admin", "user"],
  },
  // {
  //   href: "users",
  //   Text: "کاربران",
  //   icon: <FiUsers size={20} />,
  //   access: ["admin"],
  // },
  {
    href: "products",
    Text: "محصولات",
    icon: <BsShop size={20} />,
    access: ["admin"],
  },
];

export default function AsidePanel({ status, user }) {
  return (
    <motion.aside
      initial={status ? { width: "0px" } : { width: "20rem" }}
      animate={status ? { width: "20rem" } : { width: "0px" }}
      className="animate-sidebar-navigation overflow-hidden duration-300 transition-width h-full bg-white shadow-sm border-l hidden lg:flex lg:relative"
    >
      <nav className="py-8 px-5 w-full h-full flex flex-col space-y-4">
        {/* <Logo /> */}
        {user && (
          <ul className="space-y-1.5">
            {data.map((item, index) =>
              item.access.includes(user.role) ? (
                <li key={index}>
                  <Link
                    className="flex items-center gap-x-2 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100"
                    to={item.href}
                  >
                    {item.icon} {item.Text}
                  </Link>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        )}
      </nav>
    </motion.aside>
  );
}
