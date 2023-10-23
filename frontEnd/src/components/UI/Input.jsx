export default function Input({ type, className, ref = null, ...other }) {
  return (
    <input
      type={type}
      className={`py-3 px-4 block w-full transition-all  border-gray-200 border rounded text-sm focus:border-blue-500 focus:ring-blue-500 ${className}`}
      {...other}
    />
  );
}
