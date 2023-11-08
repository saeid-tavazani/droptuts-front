export default function Body({ index, children, visibility }) {
  return (
    <div
      id={"tabs-with-icons-".concat(index)}
      aria-labelledby={"tabs-with-icons-item-".concat(index)}
      role="tabpanel"
      className={visibility ? "hidden" : ""}
    >
      {children}
    </div>
  );
}
