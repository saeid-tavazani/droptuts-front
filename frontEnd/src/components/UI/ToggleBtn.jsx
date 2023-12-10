export default function ToggleBtn({ ...res }) {
  return (
    <label
      for="toggleB"
      className="flex  overflow-hidden items-center cursor-pointer "
    >
      <div {...res} className="relative shadow-sm">
        <input
          type="checkbox"
          id="toggleB"
          className="sr-only m-0"
          defaultChecked
        />
        <div className="block bg-gray-200 transition-all w-11 h-6 rounded-full"></div>
        <div className="dot absolute left-1.5 top-1 bg-white w-4 h-4 rounded-full transition-all"></div>
      </div>
    </label>
  );
}
