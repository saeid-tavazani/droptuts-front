import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
export default function Aside() {
  const data = [
    { href: "/", Text: "داشبورد", icon: <AiOutlineHome size={20} /> },
  ];

  return (
    <aside
      id="application-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform z-[60] w-64 bg-white border-x border-gray-200 py-5 overflow-y-auto scrollbar-y h-full min-w-[256px] lg:block lg:-translate-x-0 open"
    >
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          {data.map((item, index) => (
            <li key={index}>
              <Link
                className="flex items-center gap-x-2 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100"
                to={item.href}
              >
                {item.icon}
                {item.Text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
