export default function Button({
  className,
  children,
  hover = "focus:ring-blue-500 hover:bg-blue-600 bg-blue-500 text-white",
  ...other
}) {
  return (
    <button
      className={`py-3 px-4  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:outline-none focus:ring-2  focus:ring-offset-2 transition-all text-sm ${className} ${hover}`}
      {...other}
    >
      {children}
    </button>
  );
}
