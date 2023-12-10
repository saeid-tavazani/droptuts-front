import { Input as InputM } from "@material-tailwind/react";

export default function Input({ type, label, className = "w-full", ...res }) {
  return <InputM {...res} color="blue" label={label} className={className} />;
}
