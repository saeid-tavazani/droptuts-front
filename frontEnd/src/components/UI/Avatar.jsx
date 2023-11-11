import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
export default function Avatar({ list, user }) {
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs      "
      >
        {user?.picture != "NULL" && user?.picture != null ? (
          <img
            className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white "
            src={user.picture}
            alt={user.full_name}
          />
        ) : (
          <BiUserCircle size={50} />
        )}
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2   "
        aria-labelledby="hs-dropdown-with-header"
      >
        {user?.picture != "NULL" && user?.picture != null ? (
          <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg ">
            <p className="text-sm text-gray-500 ">{user.full_name}</p>
            <p className="text-sm font-medium text-gray-800 ">{user.email}</p>
            <p className="text-sm text-gray-500 ">{user.phone}</p>
          </div>
        ) : (
          ""
        )}
        <div className="mt-2 py-2 first:pt-0 last:pb-0">
          {list.map((item, index) => (
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
  );
}
