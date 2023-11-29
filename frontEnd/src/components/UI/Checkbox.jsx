export default function Checkbox({ ...res }) {
  return (
    <input
      {...res}
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      type="checkbox"
    />
  );
}
