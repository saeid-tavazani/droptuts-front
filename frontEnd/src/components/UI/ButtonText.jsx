export default function ButtonText({ children, ...res }) {
  return (
    <button
      className="p2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-600 hover:text-gray-600 focus:outline-none focus:ring-2  focus:ring-offset-2 transition-all text-sm "
      {...res}
    >
      {children}
    </button>
  );
}
