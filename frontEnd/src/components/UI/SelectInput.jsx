import { Select, Option } from "@material-tailwind/react";
export default function SelectInput({ list, ...res }) {
  return (
    <div dir="ltr">
      <Select
        // defaultValue={list[0].id}

        {...res}
        color="blue"
        label="Select Version"
      >
        {list.map((item) => (
          <Option key={item.id} value={`${item.id}`}>
            {item.password}
          </Option>
        ))}
      </Select>
    </div>
  );
}
