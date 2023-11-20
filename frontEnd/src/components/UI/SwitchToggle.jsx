export default function SwitchToggle({ active, inActive, ...res }) {
  return (
    <div className="relative inline-block">
      <input
        type="checkbox"
        id="hs-small-switch-soft"
        className="peer relative w-11 h-6 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-100 checked:border-blue-200 focus:checked:border-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-800/30 dark:checked:border-blue-800 dark:focus:ring-offset-gray-600

  before:inline-block before:w-5 before:h-5 before:bg-white checked:before:bg-blue-600 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-500"
      />
      <label for="hs-small-switch-soft" className="sr-only">
        switch
      </label>
    </div>
  );
}
