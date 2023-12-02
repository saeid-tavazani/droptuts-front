export default function Input({ type, className = "w-full", ...res }) {
  return (
    <input
      {...res}
      type={type}
      required
      className={`block rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
    />
  );
}