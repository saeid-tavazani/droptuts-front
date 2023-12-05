import Logo from "../../components/UI/Logo";
import { motion } from "framer-motion";

export default function AsidePanel({ status }) {
  return (
    <motion.aside
      initial={status ? { width: "0px" } : { width: "20rem" }}
      animate={status ? { width: "20rem" } : { width: "0px" }}
      className="animate-sidebar-navigation overflow-hidden duration-300 transition-width h-full bg-white shadow-sm border-l hidden lg:flex lg:relative"
    >
      <div className="py-8 px-8 w-full h-full flex flex-col">
        <Logo />
      </div>
    </motion.aside>
  );
}
