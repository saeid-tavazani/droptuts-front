export default function Select({ children, className, ...res }) {
  return (
    <select
      id="hs-select-label"
      {...res}
      className={`py-3 px-4 block transition-all h-[46px] border-gray-200 border rounded text-sm focus:border-blue-500 focus:ring-blue-500 ${className}`}
    >
      {children}
    </select>
  );
}
