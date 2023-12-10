import { Button as ButtonMa } from "@material-tailwind/react";

export default function Button({ className = "w-full", children, ...res }) {
  return (
    <ButtonMa {...res} color="blue" size="md" className={className}>
      {children}
    </ButtonMa>
  );
}
