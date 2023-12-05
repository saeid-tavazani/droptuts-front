export default function ToggleBtn({ ...res }) {
  return (
    // <div className="flex items-center justify-center">
    <label
      for="toggleB"
      className="flex  overflow-hidden items-center cursor-pointer "
    >
      <div {...res} className="relative shadow-sm">
        <input type="checkbox" id="toggleB" className="sr-only m-0" />
        <div className="block bg-gray-200 transition-all w-11 h-6 rounded-full"></div>
        <div className="dot absolute left-1.5 top-1 bg-white w-4 h-4 rounded-full transition-all"></div>
      </div>
    </label>
    // </div>
  );
}

// block rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full
