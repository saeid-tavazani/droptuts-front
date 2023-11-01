export default function InputFile({ ...res }) {
  return (
    <label className="flex">
      <input
        {...res}
        type="file"
        className="block w-full text-sm text-gray-500  file:mr-4 file:py-2 file:px-4  file:rounded-md file:border-0  file:text-sm file:font-semibold  file:bg-blue-500 file:text-white hover:file:bg-blue-600"
      />
    </label>
  );
}
