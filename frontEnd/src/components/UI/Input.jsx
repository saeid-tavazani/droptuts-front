import { Input as InputM } from "@material-tailwind/react";

export default function Input({ type, label, className = null, ...res }) {
  return (
    <div className={className}>
      <InputM {...res} color="blue" label={label} />
    </div>
  );
}
