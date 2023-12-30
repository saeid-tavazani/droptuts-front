import { Switch } from "@material-tailwind/react";
export default function ToggleBtn({ label, ...res }) {
  return (
    <div className="flex w-max">
      <Switch
        color="blue"
        className="h-full w-full"
        containerProps={{
          className: "w-11 h-6",
        }}
        circleProps={{
          className: "before:hidden left-0.5 border-none",
        }}
        {...res}
        label={label}
        defaultChecked
      />
    </div>
  );
}
