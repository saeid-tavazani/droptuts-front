import styles from "../../assets/styles/style";
import { Link } from "react-router-dom";
import { FaInstagram, FaTelegram } from "react-icons/fa";
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t mt-6 shadow-sm bg-box">
      <div
        className={`${styles.container} py-10 flex items-center gap-4 justify-between`}
      >
        <p>تمامی حقوق محفوظ است</p>
        <div className="flex items-center gap-4">
          <Link>
            <FaInstagram size={30} />
          </Link>
          <Link>
            <FaTelegram size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
