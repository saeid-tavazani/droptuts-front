export default function TD({ children, className }) {
  return (
    <td className={`p-3 whitespace-nowrap text-sm text-gray-800 ${className}`}>
      {children}
    </td>
  );
}
