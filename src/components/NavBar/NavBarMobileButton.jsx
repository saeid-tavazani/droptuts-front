import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

export default function NavBarMobileButton({
  open,
  className = "sm:hidden",
  ...res
}) {
  return (
    <div {...res} className={`${className} h-fit`}>
      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className=" -inset-0.5" />
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
}
