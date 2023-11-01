export default function SwitchInpute({ value = 0 }) {
  return (
    <div dir="ltr" className="flex items-center justify-end">
      <label
        htmlFor="hs-valid-toggle-switch"
        className="text-sm text-gray-500 mr-3 "
      >
        غیره فعال
      </label>
      <input
        type="checkbox"
        id="hs-valid-toggle-switch"
        className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-green-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200  ring-1 ring-transparent checked:hover:bg-green-600 checked:focus:bg-green-600 focus:border-green-600 focus:ring-green-600 ring-offset-white focus:outline-none appearance-none before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-green-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
        defaultChecked={value}
      />
      <label
        htmlFor="hs-valid-toggle-switch"
        className="text-sm text-gray-500 ml-3 "
      >
        فعال
      </label>
    </div>
  );
}
