import { Disclosure } from "@headlessui/react";
import styles from "../../assets/styles/style";

export default function NavBarMobile({ navigation, classNames }) {
  return (
    <Disclosure.Panel className="sm:hidden w-full border-b bg-box py-4">
      <div className={`${styles.container} flex flex-col gap-3`}>
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              item.current
                ? "border-r-blue-600 text-blue-600"
                : "text-gray-600 hover:border-r-blue-600 hover:text-blue-600",
              "block  p-1  text-base transition-all duration-300 font-bold border-r border-r-transparent"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
}

// className={classNames(
//     item.current
//       ? "border-b-blue-600 text-blue-600"
//       : "text-gray-600 hover:border-b-blue-600 hover:text-blue-600",
//     "transition-all duration-300 font-bold border-b border-b-transparent"
//   )}
