import styles from "../../../assets/style/style.js";
import { Link } from "react-router-dom";
// FiMenu
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import Avatar from "../../UI/Avatar.jsx";
import { BiLogIn } from "react-icons/bi";
export default function Navbar() {
  const user = useSelector((state) => state.user.value);
  const data = [
    {
      text: "ورود",
      href: "login",
      icon: <BiLogIn size={20} />,
    },
    {
      text: "ثبت نام",
      href: "Register",
      icon: "",
    },
  ];
  const navigation = [
    { text: "صفحه اصلی", href: "/" },
    { text: "آخرین دوره ها", href: "/" },
    { text: "بلاگ", href: "/" },
    { text: "تماس با ما", href: "/" },
  ];
  return (
    <nav className="w-full mx-auto px-4 h-16 border-b fixed">
      <article
        className={`${styles.container} flex items-center justify-between h-full`}
      >
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              className="h-10"
              src="https://droptuts.com/wp-content/themes/massive-dynamic/assets/img/logo-dark.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-4">
            {navigation.map((nav, index) => (
              <Link key={index} to={nav.href}>
                {nav.text}
              </Link>
            ))}
          </div>
        </div>
        <Avatar user={user} list={data} />
        <button className="hidden">
          <FiMenu size={20} />
        </button>
      </article>
    </nav>
  );
}
