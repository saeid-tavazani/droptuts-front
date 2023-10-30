import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { FcMenu } from "react-icons/fc";

export default function Header({ siteName, user }) {
  const data = [
    {
      text: "خروج",
      href: "logout",
      icon: <BiLogOut size={20} />,
    },
  ];

  return (
    <header className="sticky top-0 left-0 flex flex-wrap sm:justify-end sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4">
      <nav
        className="flex w-full items-center justify-between px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 lg:hidden"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <FcMenu size={22} />
          </button>
        </div>

        <div className="w-fit flex items-center sm:justify-between gap-x-3 sm:order-3">
          <Link className="flex-none text-xl font-semibold " to={"/"}>
            {siteName}
          </Link>
          <div className="flex flex-row items-center justify-end gap-2">
            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs      "
              >
                <img
                  className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white "
                  src={user.picture}
                  alt={user.full_name}
                />
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2   "
                aria-labelledby="hs-dropdown-with-header"
              >
                <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg ">
                  <p className="text-sm text-gray-500 ">{user.full_name}</p>
                  <p className="text-sm font-medium text-gray-800 ">
                    {user.email}
                  </p>
                </div>
                <div className="mt-2 py-2 first:pt-0 last:pb-0">
                  {data.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="flex items-center gap-2 py-3 px-3"
                    >
                      {item.icon}
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
