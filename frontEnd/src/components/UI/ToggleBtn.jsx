import { Switch } from "@material-tailwind/react";
export default function ToggleBtn({ label, ...res }) {
  return (
    <Switch color="blue" {...res} label={label} ripple={true} defaultChecked />
  );
}
