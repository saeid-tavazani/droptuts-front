import { Select, Option } from "@material-tailwind/react";
export default function SelectInput({ list, ...res }) {
  return (
    <div dir="ltr">
      <Select {...res} color="blue" label="Select Version">
        {list.map((item) => (
          <Option key={item.id} value={`${item.id}`}>
            {item.password}
          </Option>
        ))}
      </Select>
    </div>
  );
}
