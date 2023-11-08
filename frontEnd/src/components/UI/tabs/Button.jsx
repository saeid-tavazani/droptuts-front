export default function Button({ children, index }) {
  return (
    <button
      type="button"
      className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none transition-all ease-linear duration-300"
      id={"tabs-with-icons-item-".concat(index)}
      data-hs-tab={"#tabs-with-icons-".concat(index)}
      aria-controls={"tabs-with-icons-".concat(index)}
      role="tab"
    >
      {children}
    </button>
  );
}
