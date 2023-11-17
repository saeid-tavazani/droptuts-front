import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsShop, BsGlobe2 } from "react-icons/bs";

export default function Aside({ user }) {
  const data = [
    {
      href: "/",
      Text: "سایت",
      icon: <BsGlobe2 size={20} />,
      access: ["admin", "author", "user"],
    },
    {
      href: "/panel",
      Text: "داشبورد",
      icon: <AiOutlineHome size={20} />,
      access: ["admin", "author", "user"],
    },
    {
      href: "users",
      Text: "کاربران",
      icon: <FiUsers size={20} />,
      access: ["admin"],
    },
    {
      href: "products",
      Text: "محصولات",
      icon: <BsShop size={20} />,
      access: ["admin", "author"],
    },
  ];

  return (
    <aside
      id="application-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform z-[60] w-[235px] bg-white border-x border-gray-200 py-5 overflow-y-auto scrollbar-y h-full min-w-[235px] lg:block lg:-translate-x-0 open"
    >
      <nav
        className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          {data.map((item, index) =>
            item.access.includes(user.role) ? (
              <li key={index}>
                <Link
                  className="flex items-center gap-x-2 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100"
                  to={item.href}
                >
                  {" "}
                  {item.icon} {item.Text}{" "}
                </Link>{" "}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </nav>
    </aside>
  );
}
