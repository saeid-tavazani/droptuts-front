import { Checkbox as CheckboxMa } from "@material-tailwind/react";
export default function Checkbox({ label = null, ...res }) {
  return <CheckboxMa {...res} color="blue" defaultChecked label={label} />;
}
