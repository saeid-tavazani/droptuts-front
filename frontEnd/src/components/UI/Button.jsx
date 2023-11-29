export default function Button({ className = "w-full", children, ...res }) {
  return (
    <button
      {...res}
      className={`${className} flex justify-center rounded-md bg-indigo-600  p-2 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {children}
    </button>
  );
}
